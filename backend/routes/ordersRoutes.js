import express from "express";
import { creatCustomerOrder } from "../controllers/orderControllers/createCustomerOrder.js";

const router = express.Router();

router.post("/create-order", creatCustomerOrder);

export default router;
