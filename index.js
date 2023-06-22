import express from "express";

import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import hotelRoute from "./routes/hotel.js";
import userRoute from "./routes/users.js";
dotenv.config();

const app = express();
const port = 3000;

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};
// middleware
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/hotel", hotelRoute);
app.use("/api/user", userRoute);
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorMessage).json({
    status: errorStatus,
    message: errorMessage,
    success: false,
    stack: err.stack,
  });
});
app.listen(port, () => {
  connect();
  console.log("Connected to backend.");
  console.log(`Example app listening on port ${port}`);
});
