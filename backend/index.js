import "dotenv/config";
// import dotenv from "dotenv";
// dotenv.config();
import express from "express";
import cors from "cors";

import orderRoutes from "./routes/ordersRoutes.js";
import { connectToDatabase } from "./config/mongodbConnection.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server  currently running" });
});

app.use("/api/v1/order", orderRoutes);

app.listen(PORT, async () => {
  await connectToDatabase();
  console.log(`Server running on PORT: ${PORT}`);
});
