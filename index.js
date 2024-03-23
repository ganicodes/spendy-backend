const express = require("express");
const dotenv = require("dotenv");
const connectToDb = require("./database/db");
const corsMiddleware = require("./middleware/cors");

dotenv.config();

const port = 3001;
const app = express();

// middlwares
app.use(express.json());
app.use(corsMiddleware);

// routes
app.use("/api", require("./routes/routeIndex"));

// default
app.get("/", (req, res) => {
  res.send("Up and working");
});

app.listen(port, () => {
  connectToDb();
  console.log(`Server running at http://localhost:${port}`);
});
