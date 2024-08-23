import express from 'express';
import { AddtoWaitlist } from '../controllers/WaitlistController.js';

const router = express.Router();


router.post("/", AddtoWaitlist);
// Add more routes as needed

export default router;
