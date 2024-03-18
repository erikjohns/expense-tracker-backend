const express = require('express');
const router = express.Router();
const Expense = require('../models/exepnse');

// Get ALL Expenses
router.get('/', async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.json(exepnses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new expense
router.post('/', async (req, res) => {
    const expense = new Expense({
        title: req.body.title,
        amount: req.body.amount,
        payer: req.body.payer,
        participants: req.body.participants
    });

    try {
        const newExpense = await expense.save();
        res.status(201).json(newExpense);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});

module.exports = router;

