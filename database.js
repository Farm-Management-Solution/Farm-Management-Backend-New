const mysql = require("mysql");
require("dotenv").config(); // import the .env file

const connection = mysql.createConnection({
  host: process.env.HOST,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
});

module.exports = connection;
