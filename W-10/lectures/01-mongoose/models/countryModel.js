const { Schema, model } = require("mongoose");

const countrySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name of the country is required"],
      unique: true,
    },
    alpha2Code: {
      type: String,
      required: [true, "Alpha2Code of the country is required"],
      unique: true,
    },
    alpha3Code: {
      type: String,
      required: [true, "Alpha3Code of the country is required"],
      unique: true,
    },
    capital: {
      type: String,
      required: [true, "Capital of the country is required"],
      unique: true,
    },
  },
  { collection: "countries" }
);

module.exports = model("Country", countrySchema);