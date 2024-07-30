import express from 'express';
import { getPlan, createPlan } from '../controllers/PlanController.js';

const router = express.Router();

router.get('/', getPlan);
router.post('/', createPlan);

// Add more routes as needed

export default router;
