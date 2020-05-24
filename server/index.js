const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
const cors = require("cors");
const router = require("./api")

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync();

app.use(router)

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome!!!" });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});