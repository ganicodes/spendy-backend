const express = require("express");

const router = express.Router();

// expense routes
router.use("/expense", require("./expenseRoutes"));

// income routes
router.use("/income", require("./incomeRoutes"));

// auth routes
router.use("/auth", require("./authRoutes"));

module.exports = router;
