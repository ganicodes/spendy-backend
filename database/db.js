const mongoose = require("mongoose");

// to connect with mongodb
const connectToDb = () => {
  // eslint-disable-next-line no-undef
  mongoose.connect(process.env.MONGO_DB);
};

mongoose.connection.on("disconnected", () => {
  console.log("DB is disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("Connected to DB");
});

module.exports = connectToDb;
