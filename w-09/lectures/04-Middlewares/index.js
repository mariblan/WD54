import express from "express";
import cors from "cors";
import { getPgVersion } from "./DB/dbConnection.js";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import productsRoutes from "./routes/productsRoutes.js";
import logTime from "./middlewares/timeLog.js";
import validateMethod from "./middlewares/getMethod.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

getPgVersion();
app.use(cors());
app.use(express.json());
app.use(validateMethod);
app.use("/users", logTime);
app.use("/users", userRoutes);
app.use("/products", productsRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
