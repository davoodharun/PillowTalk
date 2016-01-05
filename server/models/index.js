var db = require('../db');

module.exports = {
  logs: {
    get: function(callback){
      var queryStr = 'select * from logs';
      db.query(queryStr, function(err,results){
        callback(err, results)
      })
    },
    post: function(params, callback){
      var queryStr = "insert into logs(logtext, title, userid) \
                      value (?, ?, (select id from users where username = ? limit 1))";
      db.query(queryStr, params, function(err,results){
        callback(err, results)
      })
    }
  }

}