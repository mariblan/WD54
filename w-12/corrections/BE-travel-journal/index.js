import express from "express";
import cors from "cors";
import connectDB from "./DB/dbConnection.js";
import authRouter from "./routes/authRoutes.js";
import dotenv from "dotenv";

dotenv.config();
connectDB();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/auth", authRouter);

app.listen(port, () => console.log(`Server is running on port: ${port}`));
