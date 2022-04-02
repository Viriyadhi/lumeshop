var mysql = require("mysql2");
var conn = mysql.createConnection({
  host: "127.0.0.1", // Replace with your host name
  user: "root", // Replace with your database username
  password: "EXPLODINGTNT123", // Replace with your database password
  database: "lummoshop", // // Replace with your database Name
});

conn.connect(function (err) {
  if (err) throw err;
  console.log("Database is connected successfully !");
});
module.exports = conn;
