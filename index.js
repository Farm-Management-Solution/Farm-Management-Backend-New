const express = require("express");
const app = express();

const FarmsRoutes = require("./routes/farms.routes");

const cors = require("cors");
const bodyParser = require("body-parser");

const connection = require("./database");
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/farms", FarmsRoutes);

app.get("/", function (req, res) {
  res.send("Hello Node");
});

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
  connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected to Database");
  });
});
