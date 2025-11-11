import express from 'express'
import { calculateTotalBalance } from '../controllers/summaryController';
import authenticateToken from "../middlewares/authenticateToken";

const router = express.Router();

router.get("/summary", authenticateToken, calculateTotalBalance);

export default router
