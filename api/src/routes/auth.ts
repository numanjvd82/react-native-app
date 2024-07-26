import express from "express";
import { loginUser } from "../controllers/loginUser";
import { registerUser } from "../controllers/registerUser";

const authRouter = express.Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);

export default authRouter;
