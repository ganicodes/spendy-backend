const Income = require('../database/data-access-layer/incomeDAL');
let incomeDAL = new Income();

const getIncomeTypes = async (req, res, next) => {
    try {
        let data = await incomeDAL.getIncomeTypes(req.query.userId);
        res.status(200).json({ success: true, data: data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
        next(error);
    }
}

const getIncomeList = async (req, res, next) => {
    try {
        let data = await incomeDAL.getIncomeList(req.query.userId);
        res.status(200).json({ success: true, data: data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
        next(error);
    }
}

const insertIncome = async (req, res, next) => {
    try {
        const data = await incomeDAL.insertIncome(req.body);
        res.status(200).json({ success: true, message: "New income added successfully" })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
        next(error);
    }
}

const deleteIncome = async (req, res, next) => {
    try {
        let data = await incomeDAL.deleteIncome(req.query.id);
        res.status(200).json({ success: true, message: "Income deleted successfully", data: data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
        next(error);
    }
}


module.exports = { getIncomeTypes, getIncomeList, insertIncome, deleteIncome }