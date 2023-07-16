const mongoose = require("mongoose");
const { Schema } = mongoose;

//expense
const ExpenseSchema = new Schema(
  {
    date: {
      type: Date,
      default: new Date(),
    },
    description: {
      type: String,
    },
    type: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    userId: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Expenses", ExpenseSchema);
