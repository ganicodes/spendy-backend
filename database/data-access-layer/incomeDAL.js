const IncomeTypes = require("../models/IncomeTypes");
const Incomes = require("../models/Income");
const { findTotal } = require("../../helpers/CalculationHelper");

class Income {
  async getIncomeTypes() {
    try {
      const data = await IncomeTypes.find();
      return data;
    } catch (error) {
      throw TypeError(error);
    }
  }

  async getIncomeList(userId) {
    try {
      const data = await Incomes.find({ userId });
      return data;
    } catch (error) {
      throw TypeError(error);
    }
  }

  async insertIncome(params) {
    try {
      const newRecord = new Incomes(params);
      await newRecord.save();
    } catch (error) {
      throw TypeError(error);
    }
  }

  async deleteIncome(id) {
    try {
      const data = await Incomes.findByIdAndDelete(id);
      return data;
    } catch (error) {
      throw TypeError(error);
    }
  }

  async editIncome(id, obj) {
    try {
      const data = await Incomes.findByIdAndUpdate(
        id,
        { $set: obj },
        { new: true },
      );
      return data;
    } catch (error) {
      throw TypeError(error);
    }
  }

  async getIncomeSummary(userId) {
    const response = { income: [], totalIncome: 0 };
    // { name: "Salary", value: 400 },
    // { name: "Freelance", value: 300 },
    // { name: "Others", value: 200 },
    try {
      const incomeTypesArray = await this.getIncomeTypes();
      const incomeRecords = await this.getIncomeList(userId);

      incomeTypesArray[0].incomeTypes?.forEach((item) => {
        // try to calculate value here
        const tempArr = incomeRecords
          ?.filter((e) => e.source === item)
          .map((item) => item.amount);

        const tempTotal = findTotal(tempArr);

        response.income.push({ name: item, value: tempTotal });
      });

      const totalIncomeArray = incomeRecords.map((item) => item.amount);
      const totalIncome = findTotal(totalIncomeArray);

      response.totalIncome = totalIncome;

      // console.log('response: ', response);
      return response;
    } catch (error) {
      throw TypeError(error);
    }
  }
}

module.exports = Income;
