var connection = require("../config/connection.js");

var orm = {
  selectAll: function (tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function (err, res) {
      if (err) throw err;
      console.log(res);
      cb(res);
    });
  },
  insertOne: function (tableInput, column, value, cb) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(queryString, [tableInput, column, value], function (err, res) {
      if (err) throw err;
      console.log(res);
      cb(res);
    });
  },
  updateOne: function (tableInput, column, burgerId, cb) {
    var queryString = "UPDATE ?? SET ?? = 1 WHERE id = ?";
    connection.query(queryString, [tableInput, column, burgerId], function (err, res) {
      console.log("update" + queryString);
      if (err) throw err;
      console.log(res);
      cb(res);
    });
  }
};

module.exports = orm;