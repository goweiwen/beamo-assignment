import { v4 as uuid } from "uuid";
import type { NextApiRequest, NextApiResponse } from "next";

import { validate } from "jsonschema";
import { NextRequest, NextResponse } from "next/server";

const BEAMO_API_URL = process.env.BEAMO_API_URL;
const BEAMO_API_KEY = process.env.BEAMO_API_KEY;

const schema = {
  $schema: "http://json-schema.org/draft-04/schema#",
  type: "object",
  properties: {
    firstName: { type: "string" },
    lastName: { type: "string" },
    email: { type: "string" },
    address1: { type: "string" },
    address2: { type: "string" },
    country: { type: "string" },
    city: { type: "string" },
    state: { type: "string" },
    postalCode: { type: "string" },
    items: {
      type: "array",
      items: {
        type: "object",
        properties: {
          product: { type: "string" },
          quantity: { type: "number", minimum: 1 },
        },
      },
    },
  },
  required: [
    "firstName",
    "lastName",
    "email",
    "address1",
    "country",
    "city",
    "state",
    "postalCode",
    "items",
  ],
};

export type CheckoutRequestBody = {
  firstName: string;
  lastName: string;
  email: string;
  address1: string;
  address2: string;
  country: string;
  city: string;
  state: string;
  postalCode: string;
  items: {
    product: string;
    quantity: number;
  }[];
};

export type CheckoutResponseData = {
  url: string;
  clientReferenceId: string;
};

type BeamoPaymentPagesResponse = {
  status: string;
  data: {
    url: string;
  };
};

/**
 * Receives and validates a checkout request, then attempts to create a payment
 * page using Beamo's API and returns a URL to the payment page
 * */
export async function POST(req: NextRequest) {
  const json = await req.json();
  const validateResult = validate(json, schema);
  if (!validateResult.valid) {
    console.error(validateResult.errors);
    return new Response(validateResult.errors.toString(), { status: 400 });
  }

  const body = json as unknown as CheckoutRequestBody;

  const clientReferenceId = uuid();
  console.log(`Client Reference ID: ${clientReferenceId}`);

  if (BEAMO_API_KEY === undefined || BEAMO_API_URL === undefined) {
    console.error("BEAMO_API_KEY or BEAMO_API_URL is undefined");
    return new Response("Internal server error", { status: 500 });
  }

  try {
    console.log(
      JSON.stringify({
        lineItems: body.items,
        clientReferenceId,
      })
    );
    const response = await fetch(`${BEAMO_API_URL}/v1/payment_pages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa(BEAMO_API_KEY)}:`,
      },
      body: JSON.stringify({
        lineItems: body.items,
        clientReferenceId,
      }),
    });
    if (!response.ok) {
      console.error(await response.text());
      return new Response("Internal server error", { status: 500 });
    }

    const responseBody: BeamoPaymentPagesResponse = await response.json();
    if (responseBody.status !== "SUCCEEDED") {
      console.error(responseBody);
      return new Response("Internal server error", { status: 500 });
    }

    const url = responseBody.data.url;
    return NextResponse.json({ url, clientReferenceId });
  } catch (e) {
    console.error(e);
    return new Response("Internal server error", { status: 500 });
  }
}
