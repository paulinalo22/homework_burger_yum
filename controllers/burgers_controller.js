
var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    console.log(data);
    res.render("index", { burgers: data });
  });
});

router.post("/api/burgers", function (req, res) {
  burger.insertOne("burger_name", req.body.burger_name, function (result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  var burgerId = req.params.id;

  burger.updateOne(burgerId, function (result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;