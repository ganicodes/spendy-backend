const { findTotal } = require("../../helpers/CalculationHelper");
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

  async getExpenseSummary(userId) {
    const response = { expense: [], expense2: [], totalExpense: 0 };
    // { name: "Salary", value: 400 },
    // { name: "Freelance", value: 300 },
    // { name: "Others", value: 200 },
    try {
      const expenseTypesArray = await this.getExpenseTypes();
      // console.log("expenseTypesArray: ", expenseTypesArray);
      const expenseRecords = await this.getExpenseList(userId);
      let expenseTypes = Object.keys(expenseTypesArray[0].expenseTypes);
      let expenseCategories = Object.values(
        expenseTypesArray[0].expenseTypes,
      ).flat();

      // console.log("expenseCategories: ", expenseCategories);

      expenseTypes.forEach((item) => {
        // try to calculate value here
        const tempArr = expenseRecords
          ?.filter((e) => e.type === item)
          .map((item) => item.amount);

        const tempTotal = findTotal(tempArr);

        response.expense.push({ name: item, value: tempTotal });
      });

      expenseCategories.forEach((item) => {
        // try to calculate value here
        const tempArr = expenseRecords
          ?.filter((e) => e.category === item)
          .map((item) => item.amount);

        const tempTotal = findTotal(tempArr);
        response.expense2.push({ name: item, value: tempTotal });
      });

      const totalExpenseArray = expenseRecords.map((item) => item.amount);
      const totalExpense = findTotal(totalExpenseArray);

      response.totalExpense = totalExpense;

      // console.log("response: ", response);
      return response;
    } catch (error) {
      throw TypeError(error);
    }
  }
}

module.exports = Expense;
