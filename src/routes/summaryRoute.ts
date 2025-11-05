import express from 'express'
import { calculateTotalBalance } from '../controllers/summaryController';

const router = express.Router();

router.get("/summary", calculateTotalBalance );

export default router
