const express = require("express");
const router = express.Router();

const incomeController = require('../controllers/incomeController');

router.get(`/getIncomeTypes`, incomeController.getIncomeTypes);
router.get(`/getIncomeList`, incomeController.getIncomeList);
router.post(`/insertIncome`, incomeController.insertIncome);
router.delete(`/deleteIncome`, incomeController.deleteIncome);
router.put('/editIncome', incomeController.editIncome);

module.exports = router