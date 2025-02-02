import { Input } from "antd";
import React from "react";

const DeliveryInfo = ({
  customerName,
  email,
  phoneNumber,
  deliveryAddress,
  handleUserinput,
}) => {
  return (
    <section>
      <h3 className="text-4xl">Your delivery information</h3>
      <p className="text-lg font-light text-gray-500">
        {" "}
        Enter your delivery information to make payment and confirm your order
      </p>

      <form className="flex flex-col gap-6 my-8 bg-gray-50 p-2 lg:p-18">
        <Input
          name="customerName"
          value={customerName}
          onChange={handleUserinput}
          placeholder="Enter your name"
          size="large"
        />
        <Input
          name="email"
          value={email}
          onChange={handleUserinput}
          placeholder="Email address"
          size="large"
        />
        <Input
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleUserinput}
          placeholder="Phone number"
          size="large"
        />
        <Input
          name="deliveryAddress"
          value={deliveryAddress}
          onChange={handleUserinput}
          placeholder="Delivery address"
          size="large"
        />
      </form>
    </section>
  );
};

export default DeliveryInfo;
