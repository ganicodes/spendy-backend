const Expense = require("../database/data-access-layer/expensesDAL");
let expensesDAL = new Expense();

exports.getExpenseList = async (req, res, next) => {
  try {
    let data = await expensesDAL.getExpenseList(req.query.userId);
    res.status(200).json({ success: true, data: data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
    next(error);
  }
};

exports.getExpenseTypes = async (req, res, next) => {
  try {
    let data = await expensesDAL.getExpenseTypes(req.query.userId);
    res.status(200).json({ success: true, data: data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
    next(error);
  }
};

exports.insertExpense = async (req, res, next) => {
  try {
    let data = await expensesDAL.insertExpense(req.body);
    res
      .status(200)
      .json({ success: true, message: "New expense added successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
    next(error);
  }
};

exports.deleteExpense = async (req, res, next) => {
  try {
    let data = await expensesDAL.deleteExpense(req.query.id);
    res.status(200).json({
      success: true,
      message: "Expense deleted successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
    next(error);
  }
};

exports.editExpense = async (req, res, next) => {
  try {
    await expensesDAL.editExpense(req.query.id, req.body);
    res
      .status(200)
      .json({ success: true, message: "Expense record has been updated" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
    next(error);
  }
};

exports.getExpenseSummary = async (req, res, next) => {
  try {
    let data = await expensesDAL.getExpenseSummary(req.query.userId);
    res.status(200).json({ success: true, data: data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
    next(error);
  }
};
