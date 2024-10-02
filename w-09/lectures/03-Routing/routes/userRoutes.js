import { Router } from "express";
import {
  getUsers,
  getUserById,
  createUser,
} from "../controllers/usersControllers.js";
const userRoutes = Router();

userRoutes.route("/").get(getUsers).post(createUser);
userRoutes.route("/:id").get(getUserById);

export default userRoutes;
