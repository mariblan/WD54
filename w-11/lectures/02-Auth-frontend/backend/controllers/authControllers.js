import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";
import { errorHandler } from "../middlewares/ErrorHandler.js";
import bcrypt from "bcrypt";

const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      throw new errorHandler(400, "All fields are required");
    }
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return res.status(409).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const { _id } = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    const token = jwt.sign({ _id }, process.env.JWT_SECRET, {
      expiresIn: "1w",
    });
    res.status(201).json({ token, message: "User created successfully" });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new errorHandler(400, "All fields are required");
    }
    const foundUser = await User.findOne({ email }).select("+password");
    if (!foundUser) {
      return res.status(404).json({ message: "User not found" });
    }
    const match = await bcrypt.compare(password, foundUser.password);
    if (!match) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ _id: foundUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1w",
    });
    res.status(200).json({ token, message: "User logged in successfully" });
  } catch (err) {
    next(err);
  }
};

const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId).select("+password");
    if (!user) {
      throw new ErrorHandler(404, "User not found");
    }
    const { name, email } = user;
    res.status(200).json({ name, email });
  } catch (err) {
    next(err);
  }
};

export { register, login, getUser };
