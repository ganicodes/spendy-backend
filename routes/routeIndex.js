const express = require("express");
const router = express.Router();

// expense routes
router.use("/expense", require("./expenseRoutes.js"));

// income routes
router.use("/income", require("./incomeRoutes.js"));

module.exports = router;
