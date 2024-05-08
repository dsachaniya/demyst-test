const config = require("config");
const mongoose = require("mongoose");

module.exports = function () {
  const db = "mongodb://127.0.0.1:27017/?retryWrites=true&connectTimeoutMS=10000";
  const user = process.env.sakthi_mongodbUser;
  const pass = process.env.sakthi_mongodbPass;
  const connection_str = `${db}`;

  mongoose
    .connect(connection_str)
    .then(() => console.log(`Connected to ${db}...`));
};
