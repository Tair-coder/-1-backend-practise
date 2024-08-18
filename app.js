const express = require("express");
const app = express();
const getUsers = require("./routes/getUsers");
const getToken = require("./routes/createToken");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/users", getUsers);
app.use("/token", getToken);
module.exports = app;
