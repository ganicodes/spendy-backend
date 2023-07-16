const mongoose = require("mongoose");
const { Schema } = mongoose;

const IncomeTypeSchema = new Schema({
  userId: {
    type: Number,
    require: true,
  },
  incomeTypes: [String],
});

module.exports = mongoose.model("IncomeTypes", IncomeTypeSchema);
