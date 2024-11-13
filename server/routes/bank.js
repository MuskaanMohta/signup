// routes/bankDetails.js
import express from 'express'
import { BankAccount } from '../models/BankAccount.js';
const router = express.Router();

router.post("/add", async (req, res) => {
  const { holderName, accountNumber, ifscCode, balance } = req.body;
  try {
    const newAccount = new BankAccount({ holderName, accountNumber, ifscCode, balance });
    await newAccount.save();
    res.status(201).json(newAccount);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all bank accounts
router.get("/", async (req, res) => {
  try {
    const accounts = await BankAccount.find();
    res.json(accounts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a bank account
router.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const updatedAccount = await BankAccount.findByIdAndUpdate(id, updates, { new: true });
    res.json(updatedAccount);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a bank account
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await BankAccount.findByIdAndDelete(id);
    res.json({ message: "Account deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



export {router as BankRouter}
