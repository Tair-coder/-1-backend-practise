const express = require("express");
const connection = require("./connect");
const http = require("http");
const app = express();
const getUsers = require("./routes/getUsers");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/users", getUsers);
http.createServer(app);
app.listen(8080, () => {
  console.log("works");
});
