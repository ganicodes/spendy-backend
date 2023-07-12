const IncomeTypes = require('../models/IncomeTypes')
const Incomes = require('../models/Income')

class Income {
    async getIncomeTypes() {
        try {
            const data = IncomeTypes.find();
            return data;
        } catch (error) {
            throw TypeError(error);
        }
    }

    async getIncomeList(userId) {
        try {
            const data = Incomes.find({ userId: userId });
            return data;
        } catch (error) {
            throw TypeError(error);
        }
    }

    async insertIncome(params) {
        try {
            const newRecord = new Incomes(params);
            await newRecord.save();
            return;
        } catch (error) {
            throw TypeError(error);
        }
    }

    async deleteIncome(id) {
        try {
            let data = await Incomes.findByIdAndDelete(id);
            return data;
        } catch (error) {
            throw TypeError(error);
        }
    }

    async editIncome(id, obj) {
        try {
            let data = await Incomes.findByIdAndUpdate(id, { $set: obj }, { new: true });
            return data;
        } catch (error) {
            throw TypeError(error)
        }
    }
}

module.exports = Income