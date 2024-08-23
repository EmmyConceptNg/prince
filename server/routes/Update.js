import express from 'express';

import {
  createOrUpdateContent,
  getContent,
} from "../controllers/UpdateController.js";

const router = express.Router();


router.post("/", createOrUpdateContent);
router.get("/", getContent);
// Add more routes as needed

export default router;
