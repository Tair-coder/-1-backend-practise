const express = require("express");
const connection = require("./connect");
const http = require("http");
const app = express();
const route = express.Router();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const routerUsers = route.get("/users", (req, res, next) => {
  connection.query("SELECT * FROM users", (err, result) => {
    if (!err) {
      res.status(200).json(result);
    } else {
      res.status(503).json({ message: "Error on server" });
    }
  });
});
app.use("/users", routerUsers);
http.createServer(app);
app.listen(8080, () => {
  console.log("works");
});
