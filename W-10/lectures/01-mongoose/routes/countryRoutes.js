const { Router } = require("express");
const countriesRouter = Router();
const {
  getAllCountries,
  getOneCountryByCode,
  getCountryById,
  creatingOneCountry,
  updatingOneCountry,
  deletingOneCountry,
} = require("../controllers/countryControllers.js");

countriesRouter.route("/").get(getAllCountries).post(creatingOneCountry);
countriesRouter
  .route("/countryById/:id")
  .get(getCountryById)
  .put(updatingOneCountry)
  .delete(deletingOneCountry);
countriesRouter.route("/countryByCode/:code").get(getOneCountryByCode);

module.exports = countriesRouter;
