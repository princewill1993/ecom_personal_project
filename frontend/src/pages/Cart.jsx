import React from "react";
import CartList from "../components/cart/CartList";
import BackButton from "../components/ui/bttons/BackButton";
import CartSummary from "../components/cart/CartSummary";

const Cart = () => {
  return (
    <section className="max-w-[1000px] mx-auto py-16 lg:py-24 px-4">
      <h1 className="text-3xl lg:text-5xl mb-4">Your cart items</h1>
      <div className="flex justify-start">
        <BackButton />
      </div>

      <div className="flex flex-col lg:flex-row w-full gap-6">
        <div className=" w-full lg:w-[60%]">
          <CartList />
        </div>
        <div className="w-full lg:w-[40%]">
          <CartSummary />
        </div>
      </div>
    </section>
  );
};

export default Cart;
