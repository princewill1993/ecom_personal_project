import Order from "../../models/orderModels/orderModel.js";

async function creatCustomerOrder(req, res) {
  const { reference, customerDeliveryInfo, userCartSummary, cartItems } =
    req.body;

  if (!reference) {
    res.status(400).json({ message: "Reference number is missing" });
  }
  if (!customerDeliveryInfo) {
    res.status(400).json({ message: "Customer delivery info is missing" });
  }
  if (!userCartSummary) {
    res.status(400).json({ message: "Order summary is not provided" });
  }
  if (!cartItems) {
    res.status(400).json({ message: "Order missing in your cart" });
  }

  try {
    const orderCreated = await Order.create({
      reference: {
        transaction: reference.transaction,
        message: reference.message,
        status: reference.status,
        trxref: reference.trxref,
      },
      customerDeliveryInfo: customerDeliveryInfo,
      userCartSummary: userCartSummary,
      cartItems: cartItems,
    });

    res
      .status(201)
      .json({ status: "success", data: "order created successfully" });
  } catch (error) {
    res.status(400).json({ status: "failed", data: error });
  }
}

export { creatCustomerOrder };
