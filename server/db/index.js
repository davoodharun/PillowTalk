var mysql = require('mysql');

var connection = mysql.createConnection({
  user: "root",
  password: "admin",
  database: "pillowtalk"
});

connection.connect();

module.exports = connection;

