# Beamo Store

## Introduction

This repository is an example of how to integrate Beamo into a Next.js storefront.

## Live Demo

[Try it out on Vercel!](https://beamo-assignment.vercel.app/)

## Implementation

### Payment Flow

1. User adds product to cart from homepage (`/`) or product page (`/items/<id>/<name>`)
2. User visits cart page (`/cart`)
3. User clicks checkout and is redirected to checkout page (`/checkout`)
4. User enters contact details and shipping address
5. User clicks `Payment` button, and a `POST` request is sent to `/api/checkout` on the server.
6. Server validates the form details using `jsonschema` and attempt to create a payment page using Beamo's API, then send the URL back to the user.
7. User's browser will open a new window to complete payment.
8. (unimplemented) A webhook on the server side will validate that payment has been completed, and inform the user (via long polling or webhooks)

### Shopping Cart

The shopping cart is managed using Redux on the client only and is not server-side rendered. We persist the cart information to `localStorage` for persistence. The cart is cleared when a checkout is complete.

## Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.