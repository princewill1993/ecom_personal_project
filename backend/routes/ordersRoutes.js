import express from "express";
import { creatCustomerOrder } from "../controllers/orderControllers/createCustomerOrder.js";
import { getAllOrders } from "../controllers/orderControllers/getOrders.js";
import { getOrderInfo } from "../controllers/orderControllers/getSingleOrderInfo.js";

const router = express.Router();

router.post("/create-order", creatCustomerOrder);
router.get("/all-customer-orders", getAllOrders);
router.get("/order-info/:orderId", getOrderInfo);

export default router;
