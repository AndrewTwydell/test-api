var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const {Model} = require("objection");
const {knexInstance} = require("./config/dbConfig");
var indexRouter = require("./routes/index");
require('dotenv').config()
// console.log(process.env)

Model.knex(knexInstance);

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "All Functioning!",
  });
});
app.use("/api", indexRouter);

module.exports = app;
