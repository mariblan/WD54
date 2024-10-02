const {Router} = require("express");
const {getUsers, getUserById, createUser} = require("../controllers/usersControllers");
const userRoutes = Router();

userRoutes.route("/").get(getUsers).post(createUser);
userRoutes.route("/:id").get(getUserById);

module.exports = userRoutes;