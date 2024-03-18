const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    payer: {
        type: String, 
        required: true
    },
    participants: {
        type: [String],
        required: true
    }
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;