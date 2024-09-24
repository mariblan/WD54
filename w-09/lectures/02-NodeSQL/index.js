const express = require("express");
const app = express();
require("dotenv").config();
const { getPgVersion } = require("./DB/dbConnection");
const { getUsers, getUserById, createUser } = require("./controllers/usersControllers");
const port = process.env.PORT || 3000;

getPgVersion();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.route("/users").get(getUsers).post(createUser);
app.route("/users/:id").get(getUserById);

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
