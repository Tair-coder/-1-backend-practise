const express = require("express");
const app = express();
const getUsers = require("./routes/getUsers");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/users", getUsers);

module.exports = app;
