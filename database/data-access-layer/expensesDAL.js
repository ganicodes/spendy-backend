const Expenses = require("../models/Expenses");
const ExpenseTypes = require("../models/ExpenseTypes");

class Expense {
  async getExpenseTypes() {
    try {
      const data = await ExpenseTypes.find();
      return data;
    } catch (error) {
      throw TypeError(error);
    }
  }

  async getExpenseList(userId) {
    try {
      const data = await Expenses.find({ userId: userId });
      return data;
    } catch (error) {
      throw TypeError(error);
    }
  }

  async insertExpense(params) {
    try {
      const newRecord = new Expenses(params);
      await newRecord.save();
      return;
    } catch (error) {
      throw TypeError(error);
    }
  }

  async deleteExpense(id) {
    try {
      let data = await Expenses.findByIdAndDelete(id);
      return data;
    } catch (error) {
      throw TypeError(error);
    }
  }

  async editExpense(id, obj) {
    try {
      let data = await Expenses.findByIdAndUpdate(
        id,
        { $set: obj },
        { new: true },
      );
      return data;
    } catch (error) {
      throw TypeError(error);
    }
  }
}

module.exports = Expense;
