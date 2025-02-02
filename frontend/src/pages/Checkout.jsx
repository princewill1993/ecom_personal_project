import React from "react";
import DeliveryInfo from "../components/checkout/DeliveryInfo";
import Payment from "../components/checkout/Payment";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const Checkout = () => {
  const { userCartSummary } = useSelector((state) => state.cart);
  const [customerDeliveryInfo, setCustomerDeliveryInfo] = React.useState({
    customerName: "",
    email: "",
    phoneNumber: "",
    deliveryAddress: "",
  });

  if (userCartSummary.totalCartItems < 1 || userCartSummary.totalAmount < 1) {
    return <Navigate to={"/"} />;
  }

  // function to handle user input for delivery

  function handleUserinput(e) {
    const { name, value } = e.target;
    setCustomerDeliveryInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <div className="max-w-[1000px] mx-auto py-16 px-4">
      <DeliveryInfo
        custormerName={customerDeliveryInfo.customerName}
        email={customerDeliveryInfo.email}
        phoneNumber={customerDeliveryInfo.phoneNumber}
        deliveryAddress={customerDeliveryInfo.deliveryAddress}
        handleUserinput={handleUserinput}
      />
      <Payment customerDeliveryInfo={customerDeliveryInfo} />
    </div>
  );
};

export default Checkout;
