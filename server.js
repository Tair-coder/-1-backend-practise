const http = require("http");
const app = require("./app");

http.createServer(app);
app.listen(8080, () => {
  console.log("works");
});
