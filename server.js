var express = require("express");
var app = express();

// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

// index page
app.get("/", function (req, res) {
  res.render("pages/index");
});

// about page
app.get("/document", function (req, res) {
  const tablesCount = req.query["c"];
  const rows = req.query["r"];
  res.render("pages/document", { tablesCount: tablesCount, rows: rows });
});

module.exports = app;
