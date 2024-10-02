const { Router } = require("express");
const {
  getProducts,
  createProduct,
} = require("../controllers/productsControllers");
const productsRoutes = Router();

productsRoutes.route("/").get(getProducts).post(createProduct);

module.exports = productsRoutes;
