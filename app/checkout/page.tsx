"use client";

import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { selectItemIds } from "../cart/cartSlice";
import { CheckoutResponseData } from "../api/checkout/route";
import { useRouter } from "next/navigation";

function Checkout() {
  const router = useRouter();
  const dispatch = useDispatch();
  const items = useSelector(selectItemIds);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const response = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({
        ...data,
        items: items.map(({ id, quantity }) => ({ product: id, quantity })),
      }),
    });
    const body: CheckoutResponseData = await response.json();
    window.open(body.url);
    dispatch({ type: "cart/clear" });
    router.push("/checkout/processing");
  };

  return (
    <main className="container mx-auto my-2 sm:px-2">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <label className="my-2 flex flex-col">
          <span className="text-lg font-bold">First Name</span>
          <input
            className="input"
            {...register("firstName", { required: true })}
            aria-invalid={errors.firstName ? "true" : "false"}
          />
        </label>
        {errors.firstName && (
          <span className="text-sm text-red-400">This field is required</span>
        )}
        <label className="my-2 flex flex-col">
          <span className="text-lg font-bold">Last Name</span>
          <input
            className="input"
            {...register("lastName", { required: true })}
            aria-invalid={errors.lastName ? "true" : "false"}
          />
        </label>
        {errors.lastName && (
          <span className="text-sm text-red-400">This field is required</span>
        )}
        <label className="my-2 flex flex-col">
          <span className="text-lg font-bold">Email</span>
          <input
            className="input"
            type="email"
            {...register("email", { required: true })}
            aria-invalid={errors.email ? "true" : "false"}
          />
        </label>
        {errors.email && (
          <span className="text-sm text-red-400">This field is required</span>
        )}
        <label className="my-2 flex flex-col">
          <span className="text-lg font-bold">Address</span>
          <input
            className="input"
            {...register("address1", { required: true })}
            aria-invalid={errors.address1 ? "true" : "false"}
          />
          <input className="input" {...register("address2")} />
        </label>
        {errors.address1 && (
          <span className="text-sm text-red-400">This field is required</span>
        )}
        <label className="my-2 flex flex-col">
          <span className="text-lg font-bold">Country</span>
          <input
            className="input"
            {...register("country", { required: true })}
            aria-invalid={errors.country ? "true" : "false"}
          />
        </label>
        <label className="my-2 flex flex-col">
          <span className="text-lg font-bold">City</span>
          <input
            className="input"
            {...register("city", { required: true })}
            aria-invalid={errors.city ? "true" : "false"}
          />
        </label>
        {errors.city && (
          <span className="text-sm text-red-400">This field is required</span>
        )}
        <label className="my-2 flex flex-col">
          <span className="text-lg font-bold">State</span>
          <input
            className="input"
            {...register("state", { required: true })}
            aria-invalid={errors.state ? "true" : "false"}
          />
        </label>
        {errors.state && (
          <span className="text-sm text-red-400">This field is required</span>
        )}
        <label className="my-2 flex flex-col">
          <span className="text-lg font-bold">Postal Code</span>
          <input
            className="input"
            {...register("postalCode", { required: true })}
            aria-invalid={errors.postalCode ? "true" : "false"}
          />
        </label>
        {errors.postalCode && (
          <span className="text-sm text-red-400">This field is required</span>
        )}
        <input
          className="button button-primary button-lg mx-2 sm:mx-0"
          type="submit"
          value="Payment"
        />
      </form>
    </main>
  );
}

export default Checkout;
