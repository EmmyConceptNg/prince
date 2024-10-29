import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

router.get("/", (req, res) => {
  if (!req.session.token) {
    req.session.token = uuidv4();
    req.session.browserId = uuidv4();
  }

  res.cookie("browserId", req.session.browserId, {
    httpOnly: true,
    secure:
      process.env.NODE_ENV === "production" ||
      process.env.NODE_ENV === "development",
  });

  res.json({ token: req.session.token, browserId: req.session.browserId });
});

export default router;
