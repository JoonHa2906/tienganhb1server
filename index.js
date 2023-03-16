const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(express.json());

const methodOverride = require('method-override')
app.use(methodOverride('_method'))

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
var corsOptions = {
  origin:'*', 
  credentials:true,
  optionSuccessStatus:200,
};
app.use(cors(corsOptions));

// Route
app.get("/", (req, res) => {
  res.send("Home Page");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
