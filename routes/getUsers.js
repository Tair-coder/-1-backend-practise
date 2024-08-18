const express = require("express");
const connection = require("../connect");
const route = express.Router();
// const
route.get("/users", (req, res, next) => {
  connection.query("SELECT * FROM users", (err, result) => {
    if (!err) {
      res.status(200).json(result);
    } else {
      res.status(503).json({ message: "problems with server" });
    }
  });
});
module.exports = route;
