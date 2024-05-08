const express = require("express");
const cors = require("cors");
const auth = require("./routes/auth");
const users = require("./routes/user");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", users);
app.use("/api/auth", auth);
require("./startup/db")();
app.listen(3000, () => console.log("Successfully listening on Port 3000"));

module.exports = app;
