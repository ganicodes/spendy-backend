const Expenses = require('../models/Expenses')
const ExpenseTypes = require('../models/ExpenseTypes')

class Expense {

    async getExpenseTypes() {
        try {
            const data = ExpenseTypes.find();
            return data;
        } catch (error) {

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
}

module.exports = Expense