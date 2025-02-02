import React from "react";
import CartItemCard from "./CartItemCard";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const CartList = () => {
  const { cartItems } = useSelector((state) => state.cart);

  if (cartItems.length === 0) {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-8">No item in cart yet</h1>
        <Link
          to={"/products"}
          className="text-3xl text-gray-400 underline-offset-[10px] underline hover:text-black "
        >
          Shop Now...
        </Link>
      </div>
    );
  }

  return (
    <section>
      {cartItems.map((item) => {
        return (
          <CartItemCard
            key={item.product_id}
            product_id={item.product_id}
            product_image={item.product_image}
            product_name={item.product_name}
            product_price={item.product_price}
            product_quantity={item.product_quantity}
          />
        );
      })}
    </section>
  );
};

export default CartList;
