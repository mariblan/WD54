import { Router } from "express";
// import * as authControllers from '../controllers/authControllers.js';
import { register, login, getUser } from "../controllers/authControllers.js";
import tokenVerification from "../middlewares/tokenVerification.js";
const authRouter = Router();

authRouter.post("/signup", register);
authRouter.post("/signin", login);
authRouter.post("/me", tokenVerification, getUser);

export default authRouter;
