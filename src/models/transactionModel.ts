import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  nominal: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: ["Income", "Expense"],
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;
