import { Router } from "express";
import logTime from "../middlewares/timeLog.js";
import {
  getUsers,
  getUserById,
  createUser,
} from "../controllers/usersControllers.js";
const userRoutes = Router();
// userRoutes.use("/", logTime);
userRoutes.route("/").get(logTime, getUsers).post(createUser);
userRoutes.route("/:id").get(getUserById);

export default userRoutes;
