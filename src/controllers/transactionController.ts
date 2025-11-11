import { Request, Response } from "express";
import {
  addTransactionService,
  deleteTransactionService,
  getAllTransactionService,
  getAllUserTransactionService,
  getTransactionByIdService,
} from "../services/transactionService";

export const getAllTransactionController = async (
  req: Request,
  res: Response
) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ message: "User ID tidak ditemukan" });
    }
    const transactions = await getAllUserTransactionService(req.userId);
    res.json(transactions);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getTransactionByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const transaction = await getTransactionByIdService(
      req.params.id,
      req.userId
    );
    if (!transaction) {
      return res.status(404).json({ message: "Transaksi tidak ditemukan" });
    }
    res.json(transaction);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const addTransactionController = async (req: Request, res: Response) => {
  const data = {
    userId: req.userId,
    description: req.body.description,
    nominal: req.body.nominal,
    category: req.body.category,
  };
  console.log(data);
  try {
    const newTransaction = await addTransactionService({ ...data });
    res.status(201).json(newTransaction);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const updateTransactionController = async (
  req: Request,
  res: Response
) => {
  try {
    const transaction = await getTransactionByIdService(
      req.params.id,
      req.userId
    );
    if (!transaction) {
      return res.status(404).json({ message: "Transaksi tidak ditemukan" });
    }

    transaction.description = req.body.description || transaction.description;
    transaction.nominal = req.body.nominal || transaction.nominal;
    transaction.category = req.body.category || transaction.category;

    const updatedTransaction = await transaction.save();
    res.json(updatedTransaction);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteTransactionController = async (
  req: Request,
  res: Response
) => {
  try {
    const transaction = await getTransactionByIdService(
      req.params.id,
      req.userId
    );
    if (!transaction) {
      return res.status(404).json({ message: "Transaksi tidak ditemukan" });
    }

    deleteTransactionService(transaction.id);
    res.json({ message: "Transaksi berhasil dihapus" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

