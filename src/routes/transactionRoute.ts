import express from 'express'
import { addTransactionController, deleteTransactionController, getAllTransactionController, getTransactionByIdController, updateTransactionController } from '../controllers/transactionController';
const router = express.Router()

router.get("/transactions", getAllTransactionController );

router.get("/transactions/:id", getTransactionByIdController );

router.post("/transactions", addTransactionController );

router.put("/transactions/:id", updateTransactionController );

router.delete("/transactions/:id", deleteTransactionController );

export default router