const mongoose = require("mongoose");
const { Schema } = mongoose;

//expense
const IncomeSchema = new Schema(
  {
    date: {
      type: Date,
      default: new Date(),
    },
    description: {
      type: String,
    },
    source: {
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

module.exports = mongoose.model("Incomes", IncomeSchema);
