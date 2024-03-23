const cors = require("cors");

const corsMiddleware = cors({
  origin: [
    "http://ec2-3-110-128-72.ap-south-1.compute.amazonaws.com",
    "http://localhost:5173",
    "http://localhost:3000",
  ],
  methods: "GET,POST,PUT,DELETE,HEAD,DELETE",
  credentials: true,
});

module.exports = corsMiddleware;
