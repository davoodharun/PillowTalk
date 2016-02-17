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
      //parameter declarations
      paramsLog = params.slice(0,3);
      paramsUser = paramsLog[2];
      paramsTag = params.slice(3,4).toString().split(',');
      //user insert
      var queryStrUser = "insert into users (username) values (?)";
      db.query(queryStrUser, paramsUser, function(err,results){
        if(err){
          console.log('existing user, will not add new')
        }
        callback(err, results)
      })

       //logs insert
      var queryStrLogs = "insert into logs(logtext, title, userid) \
                      value (?, ?, (select id from users where username = ? limit 1))";
      db.query(queryStrLogs, paramsLog, function(err,results){
        callback(err, results)
      })

      //tags & tagsMessages insert
      for(var i = 0; i<paramsTag.length; i++){
        //tags insert
        var queryStrTags = "insert into tags(tagname) \
                      value (?)";
        db.query(queryStrTags, [paramsTag[i]], function(err,results){
          if(err){
          console.log('existing tag, will not add new')
          }
          callback(err, results)
        })

        //tagsMessages junction table insert
        var paramsTagsMessages = [paramsTag[i], paramsLog[1]]
        var queryTagsMessages = "insert into tagsMessages(tagid, messageid) \
                                    value ((select id from tags where tagname = ? limit 1), (select id from logs where title = ? limit 1))";
        db.query(queryTagsMessages, paramsTagsMessages, function(err,results){
          callback(err, results)
        })
      }

    }
  },

  tags: {
     get: function(callback){
      var queryStr = 'select * from tags';
      db.query(queryStr, function(err,results){
        callback(err, results)
      })
    }
  },

  tagsByLogs: {
     get: function(params, callback){

      var queryStr = 'SELECT logs.* FROM logs INNER JOIN tagsMessages ON logs.id = tagsMessages.messageid WHERE tagsMessages.tagid = ?';
      db.query(queryStr, params, function(err,results){
        callback(err, results)
      })
    }
  },

  getUsername: {
     get: function(params, callback){
      console.log(params)
      var queryStr = 'SELECT users.username from users where users.id = ?';
      db.query(queryStr, [params], function(err,results){
        console.log('users',results)
        callback(err, results)
      })
    }
  }

}