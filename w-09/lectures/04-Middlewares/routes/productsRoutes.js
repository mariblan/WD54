import { Router } from "express";
import {
  getProducts,
  createProduct,
} from "../controllers/productsControllers.js";
const productsRoutes = Router();

productsRoutes.route("/").get(getProducts).post(createProduct);

export default productsRoutes;
