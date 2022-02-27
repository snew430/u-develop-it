const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Blind430",
  database: "election",
});

module.exports = db;
