const sql = require("mysql");
const connection = sql.createConnection({
  database: "training_db",
  user: "root",
  password: "",
});
connection.connect((err) => {
  if (err) throw err;
  console.log("db works");
});
module.exports = connection;
