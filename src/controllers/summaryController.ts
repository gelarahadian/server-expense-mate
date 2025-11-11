import { Request, Response } from "express";
import {
  getAllTransactionService,
  getAllUserTransactionService,
} from "../services/transactionService";

export const calculateTotalBalance = async (req: Request, res: Response) => {
  try {
    const transactions = await getAllUserTransactionService(req.userId);

    const pemasukan = transactions
      .filter((t) => t.category === "Income")
      .reduce((sum, t) => sum + t.nominal, 0);

    const pengeluaran = transactions
      .filter((t) => t.category === "Expense")
      .reduce((sum, t) => sum + t.nominal, 0);

    const saldo = pemasukan - pengeluaran;

    res.json({ pemasukan, pengeluaran, saldo });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};