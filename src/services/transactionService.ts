import Transaction from "../models/transactionModel";

export const getAllTransactionService = async () => {
    return await Transaction.find().sort({ tanggal: -1 });
}

export const getTransactionByIdService = async (id: string) => {
    return await Transaction.findById(id);
}

export const addTransactionService = async ({description, nominal, category}: {description: string; nominal: number; category: string;}) => {
    const transaction = new Transaction({
      description: description,
      nominal: nominal,
      category: category,
    });

    return await transaction.save();
}

export const deleteTransactionService = async (id: string) => {
    return await Transaction.findByIdAndDelete(id);
}