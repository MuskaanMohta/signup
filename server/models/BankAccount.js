
import mongoose from "mongoose";
const bankAccountSchema = new mongoose.Schema({
  holderName: { type: String, required: true },
  accountNumber: { type: String, required: true, unique: true },
  ifscCode: { type: String, required: true },
  balance: { type: Number, required: true },
});

const BankAccountModel = mongoose.model("BankAccount",bankAccountSchema)
export {BankAccountModel as BankAccount}