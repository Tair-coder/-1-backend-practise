const express = require("express");
const connection = require("./connect");
const http = require("http");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
http.createServer(app);
app.listen(8080, () => {
  console.log("works");
});
