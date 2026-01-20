import express from "express";
const app = express();
import dotenv from "dotenv";
const PORT = process.env.PORT || 2000;
import mongoose from "mongoose";
dotenv.config();
import UserRouter from "../backend/routes/task.js";
import getUsers from "./routes/users.js";
import { notFound } from "./middleware/noFound.js";
import { errorHandler } from "./middleware/errorHandler.js";
app.use(express.json());

app.use("/api/user", UserRouter);
app.use("/api/users", getUsers);

app.use(notFound);
app.use(errorHandler);

mongoose.connect(process.env.NODE_ENV == "development" ? process.env.MONGO_URI_DEV : process.env.MONGO_URI_PRO)
    .then(() => console.log("✅ MongoDB connected locally"))
    .catch((err) => console.log("❌ Connection err:", err))
app.listen(PORT, () => {
  console.log(`server is runing:http://localhost:${PORT}`);
});
