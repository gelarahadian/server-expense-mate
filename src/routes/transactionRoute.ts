import express from 'express'
import { addTransactionController, deleteTransactionController, getAllTransactionController, getTransactionByIdController, updateTransactionController } from '../controllers/transactionController';
import authenticateToken from "../middlewares/authenticateToken";
const router = express.Router();

router.get("/transactions", authenticateToken, getAllTransactionController);

router.get(
  "/transactions/:id",
  authenticateToken,
  getTransactionByIdController
);

router.post("/transactions", authenticateToken, addTransactionController);

router.put("/transactions/:id", authenticateToken, updateTransactionController);

router.delete(
  "/transactions/:id",
  authenticateToken,
  deleteTransactionController
);

export default router