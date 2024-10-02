const Countries = require("../models/countryModel.js");

const getAllCountries = async (req, res) => {
  try {
    const countries = await Countries.find();
    return res.status(200).json(countries);
  } catch (err) {
    throw new Error(err);
  }
};

const getOneCountryByCode = async (req, res) => {
  try {
    const { code } = req.params;
    const alpha2Code = await Countries.findOne({ alpha2Code: code });
    const alpha3Code = await Countries.findOne({ alpha3Code: code });

    if (alpha2Code) {
      return res.status(200).json(alpha2Code);
    } else if (alpha3Code) {
      return res.status(200).json(alpha3Code);
    } else {
      return res.status(404).json({ message: "Country not found" });
      // return res.status(404).send("Country not found");
    }
  } catch (err) {
    throw new Error(err);
  }
};

const getCountryById = async (req, res) => {
  try {
    const { id } = req.params;
    const country = await Countries.findById(id);
    if (!country) {
      return res.status(404).json({ message: "Country not found" });
    }
    return res.status(200).json(country);
  } catch (err) {
    throw new Error(err);
  }
};

const creatingOneCountry = async (req, res) => {
  try {
    const { name, alpha2Code, alpha3Code, capital } = req.body;

    if (!name || !alpha2Code || !alpha3Code || !capital) {
      return res
        .status(400)
        .json({ message: "Please provide all the required fields" });
    }

    const newCountry = await Countries.create(req.body);

    // return res.status(200).json(newCountry);
    return res
      .status(200)
      .json({ message: "Country created successfully", newCountry });
  } catch (err) {
    throw new Error(err);
  }
};

const updatingOneCountry = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, alpha2Code, alpha3Code, capital } = req.body;
    if (!name || !alpha2Code || !alpha3Code || !capital) {
      return res
        .status(400)
        .json({ message: "Please provide all the required fields" });
    }
    const updatedCountry = await Countries.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedCountry) {
      return res.status(404).json({ message: "Country not found" });
    }
    return res.status(200).json({ message: "Country updated", updatedCountry });
  } catch (err) {
    throw new Error(err);
  }
};
const deletingOneCountry = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCountry = await Countries.findByIdAndDelete(id);
    if (!deletedCountry) {
      return res.status(404).json({ message: "Country not found" });
    }
    return res.status(200).json({ message: "Country deleted", deletedCountry });
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  getAllCountries,
  getOneCountryByCode,
  getCountryById,
  creatingOneCountry,
  updatingOneCountry,
  deletingOneCountry,
};
