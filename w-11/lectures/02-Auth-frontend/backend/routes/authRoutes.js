import { Router } from "express";
// import * as authControllers from '../controllers/authControllers.js';
import { register, login, getUser } from "../controllers/authControllers.js";
import tokenVerification from "../middlewares/tokenVerification.js";
const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/auth", tokenVerification, getUser);

export default authRouter;
