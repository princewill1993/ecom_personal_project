import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    reference: {
      transaction: String,
      message: String,
      status: String,
      trxref: String,
    },
    customerDeliveryInfo: {
      customerName: String,
      email: String,
      phoneNumber: String,
      deliveryAddress: String,
    },
    userCartSummary: {
      totalCartItems: Number,
      totalAmount: Number,
    },
    cartItems: [
      {
        product_id: String,
        product_name: String,
        product_price: Number,
        product_quantity: Number,
        product_image: String,
      },
    ],
    orderStatus: {
      type: String,
      enum: ["pending", "completed", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const Order = new mongoose.model("orders", orderSchema);
export default Order;
