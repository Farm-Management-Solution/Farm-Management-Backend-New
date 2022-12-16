const express = require("express");
const Router = express.Router();

const connection = require("../database");

Router.get("/", (req, res) => {
  connection.query("SELECT * FROM farms", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

module.exports = Router;
