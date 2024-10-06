import express from 'express'
import { v4 as uuidv4 } from "uuid";

const router = express.Router();


// Generate session and browser ID when a user visits the site
router.get("/", (req, res) => {
  if (!req.session.token) {
    req.session.token = uuidv4(); // Generate a unique session token
    req.session.browserId = uuidv4(); // Generate a unique browser ID
  }

  // Send both the session token and browser ID to the client
  res.json({ token: req.session.token, browserId: req.session.browserId });
});


export default router