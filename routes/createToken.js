const express = require("express");
const jwt = require("jsonwebtoken");
const connection = require("../connect");
const route = express.Router();

const SECRET_KEY = "PASTOD";

route.post("/generate-token", (req, res) => {
  let userId = 0;
  connection.query("SELECT * FROM users", (err, result) => {
    if (!err) {
      userId = userId + result.length;
    } else {
      res
        .status(503)
        .json({ message: "The service is currently unavailable." });
    }
    console.log(userId);
    const payload = {
      userId,
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
    res.json({ message: "this is your token: " + token });
  });
});

module.exports = route;
