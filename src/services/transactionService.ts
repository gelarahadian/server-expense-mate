import Transaction from "../models/transactionModel";

export const getAllTransactionService = async () => {
  return await Transaction.find().sort({ date: -1 });
};

export const getAllUserTransactionService = async (userId: string) => {
  return await Transaction.find({ userId: userId }).sort({ date: -1 });
};

export const getTransactionByIdService = async (id: string, userId: string) => {
  return await Transaction.findOne({ _id: id, userId });
};

export const addTransactionService = async ({
  userId,
  description,
  nominal,
  category,
}: {
  userId: string;
  description: string;
  nominal: number;
  category: string;
}) => {
  const transaction = new Transaction({
    userId,
    description: description,
    nominal: nominal,
    category: category,
  });

  return await transaction.save();
};

export const deleteTransactionService = async (id: string) => {
    return await Transaction.findByIdAndDelete(id);
}