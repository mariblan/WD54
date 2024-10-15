import jwt from "jsonwebtoken";

const tokenVerification = (req, res, next) => {
  try {
    const {
      headers: { authorization },
    } = req;
    if (!authorization) {
      return res.status(401).json({ message: "Access denied" });
    }

    const { _id } = jwt.verify(authorization, process.env.JWT_SECRET);
    req.userId = _id;
    next();
  } catch (err) {}
};
export default tokenVerification;
