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
      paramsLog = params.slice(0,3);
      paramsTag = params.slice(3,4).toString().split(',');
      console.log(paramsLog, paramsTag)
      var queryStrLogs = "insert into logs(logtext, title, userid) \
                      value (?, ?, (select id from users where username = ? limit 1))";
      db.query(queryStrLogs, paramsLog, function(err,results){
        callback(err, results)
      })
      for(var i = 0; i<paramsTag.length; i++){
        var queryStrTags = "insert into tags(tagname) \
                      value (?)";
        db.query(queryStrTags, [paramsTag[i]], function(err,results){
          callback(err, results)
        })
        var paramsTagsMessages = [paramsTag[i], paramsLog[1]]
        var queryTagsMessages = "insert into tagsMessages(tagid, messageid) \
                                    value ((select id from tags where tagname = ? limit 1), (select id from logs where title = ? limit 1))";
        db.query(queryTagsMessages, paramsTagsMessages, function(err,results){
          callback(err, results)
        })
      }

    }
  }

}