import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Middleware to verify JWT and attach user to req.user
export const authenticateToken = async (req, res, next) => {
  const token =
    req.cookies.access_token || req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(403).json({ error: "Access denied, no token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWTSECRET);
    req.user = await User.findById(decoded.id).select("-password"); // Exclude password

    if (!req.user) {
      return res.status(404).json({ error: "User not found." });
    }

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    res.status(400).json({ error: "Invalid token." });
  }
};
