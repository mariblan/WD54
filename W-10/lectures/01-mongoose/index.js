const express = require("express");
const cors = require("cors");
const app = express();
const connectToDB = require("./DB/dbConnection.js");
const sanitize = require("express-mongo-sanitize");

const countriesRouter = require("./routes/countryRoutes.js");
require("dotenv").config();

connectToDB();
const port = process.env.PORT || 3000;

//Middlewares
app.use(sanitize({ replaceWith: "_", allowDots: true }));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

//Country routes
app.use("/countries", countriesRouter);

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
