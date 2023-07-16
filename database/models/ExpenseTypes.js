const mongoose = require("mongoose");
const { Schema } = mongoose;

const ExpenseTypeSchema = new Schema({
  userId: {
    type: Number,
    required: true,
  },
  expenseTypes: {
    // "Needs": ["Groceries", "Medicine", "Phone Bill", "Internet Bill", "Food", "Travel/Outing", "Books", "Rent", "Hospital", "Gym", "Personal care", "Education", "Clothes", "Shoes", "Laptop EMI", "Miscellaneous", "Others"],
    // "Wants": ["Clothes", "Shoes", "Food", "Travel/Outing", "Movie", "Gadgets", "Miscellaneous", "Others"],
    // "Savings": ["Savings Account", "SIP", "Emergency Fund"]
    Needs: [],
    Wants: [],
    Savings: [],
  },
});

module.exports = mongoose.model("ExpenseTypes", ExpenseTypeSchema);
