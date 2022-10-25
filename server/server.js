import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/MongoDB.js";
import ImportData from "./Seed.js";
import productRoute from "./Routes/ProductRoutes.js";
import userRouter from "./Routes/UserRoutes.js";
import orderRouter from "./Routes/OrderRoutes.js";
import newRouter from "./Routes/NewRoutes.js";
import cors from "cors";

import { errorHandler, notFound } from "./Middleware/Error.js";

dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/import", ImportData);
app.use("/products", productRoute);
app.use("/users", userRouter);
app.use("/orders", orderRouter);
app.use("/news", newRouter);
app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

// error handler
app.use(notFound);
app.use(errorHandler);

// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`server is running port ${PORT}...`));
