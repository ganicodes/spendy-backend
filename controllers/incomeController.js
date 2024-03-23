const Income = require("../database/data-access-layer/incomeDAL");

const incomeDAL = new Income();

exports.getIncomeTypes = async (req, res, next) => {
  try {
    const data = await incomeDAL.getIncomeTypes(req.query.userId);
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
    next(error);
  }
};

exports.getIncomeList = async (req, res, next) => {
  try {
    const data = await incomeDAL.getIncomeList(req.query.userId);
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
    next(error);
  }
};

exports.insertIncome = async (req, res, next) => {
  try {
    await incomeDAL.insertIncome(req.body);
    res
      .status(200)
      .json({ success: true, message: "New income added successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
    next(error);
  }
};

exports.deleteIncome = async (req, res, next) => {
  try {
    const data = await incomeDAL.deleteIncome(req.query.id);
    res.status(200).json({
      success: true,
      message: "Income deleted successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
    next(error);
  }
};

exports.editIncome = async (req, res, next) => {
  try {
    await incomeDAL.editIncome(req.query.id, req.body);
    res
      .status(200)
      .json({ success: true, message: "Income record has been updated" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
    next(error);
  }
};

exports.getIncomeSummary = async (req, res, next) => {
  try {
    const data = await incomeDAL.getIncomeSummary(req.query.userId);
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
    next(error);
  }
};
