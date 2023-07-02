const express = require("express");
const router = express.Router();

const expenseController = require('../controllers/expenseController');

router.get('/getExpenseTypes', expenseController.getExpenseTypes);
router.get('/getExpenseList', expenseController.getExpenseList);
router.post(`/insertExpense`, expenseController.insertExpense);
router.delete(`/deleteExpense`, expenseController.deleteExpense);

module.exports = router