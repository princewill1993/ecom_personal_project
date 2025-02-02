import React from "react";
import { use } from "react";
import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helper";
import { Button } from "antd";
import { useNavigate } from "react-router";

const CartSummary = () => {
  const { userCartSummary } = useSelector((state) => state.cart);

  const navigate = useNavigate();

  function handleCheckout() {
    if (userCartSummary.totalCartItems < 1 || userCartSummary.totalAmount < 1) {
      return navigate("/products");
    }
    navigate("/checkout");
  }

  return (
    <div className="bg-gray-100 rounded-md p-2">
      <div className="flex justify-between">
        <p className="text-gray-500">
          Items total ({userCartSummary.totalCartItems})
        </p>
        <p className="text-gray-500 font-semibold">
          {formatCurrency(userCartSummary.totalAmount)}
        </p>
      </div>

      <div className="flex justify-between mb-4">
        <p className="text-gray-500">discount</p>
        <p className="text-gray-500 font-semibold">%5</p>
      </div>

      <div className="text-lg font-semibold flex justify-between mb-4">
        <h3>Sub total</h3>
        <h3>{formatCurrency(userCartSummary.totalAmount)}</h3>
      </div>
      <Button onClick={handleCheckout} type="primary" size="large" block>
        Checkout {formatCurrency(userCartSummary.totalAmount)}
      </Button>
    </div>
  );
};

export default CartSummary;
