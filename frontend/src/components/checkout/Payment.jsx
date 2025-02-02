import React from "react";
import { usePaystackPayment } from "react-paystack";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { clearUserCartItems } from "../../features/cart/cartSlice";
import { serverUrl } from "../../utils/helper";
import axios from "axios";

const paystack_secret_key = import.meta.env.VITE_PAYSTACK_TEST_KEY;

const Payment = ({ customerDeliveryInfo }) => {
  const { userCartSummary, cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const config = {
    reference: new Date().getTime().toString(),
    email: customerDeliveryInfo.email,
    amount: userCartSummary.totalAmount * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: paystack_secret_key,
  };

  const navigate = useNavigate();

  const initializePayment = usePaystackPayment(config);

  // you can call this function anything
  const onSuccess = async (reference) => {
    // Implementation for whatever you want to do with reference and after success call.

    // send all these to the backend
    console.log(reference);
    console.log(userCartSummary);
    console.log(customerDeliveryInfo);
    console.log(cartItems);
    // *********** //

    try {
      // clear the user cart and take them back to the homepage
      if (reference) {
        const response = await axios.post(`${serverUrl}/order/create-order`, {
          reference: reference,
          customerDeliveryInfo: customerDeliveryInfo,
          userCartSummary: userCartSummary,
          cartItems: cartItems,
        });

        console.log(response);

        localStorage.removeItem("cartItems");
        localStorage.removeItem("cartSummary");
        dispatch(clearUserCartItems());

        alert("Thank you for your order");
        return navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
    alert("payment nt done");
  };

  function handlePaystackPayment() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // check if total cart amount is less than 1000
    if (userCartSummary.totalCartAmount < 1000) {
      return alert("you cannot order items less than 1000");
    }

    // check if user entered a valid email address
    if (emailRegex.test(customerDeliveryInfo.email) === false) {
      return alert("please enter a valid email address");
    }

    console.log("hello world");

    // use pay here
    initializePayment({ onSuccess, onClose });
  }

  return (
    <div>
      <button
        className="bg-sky-700 text-white p-2 rounded-md w-full hover:opacity-60 cursor-pointer"
        onClick={handlePaystackPayment}
      >
        Pay now
      </button>
    </div>
  );
};

export default Payment;
