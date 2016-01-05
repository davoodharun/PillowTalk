var models = require('../models');

module.exports = {
  logs: {
    get: function(req,res){

      models.logs.get(function(err,results){
        if(err){console.log(err)}
        res.json(results)
      })
    },
    post: function(req,res){
      var params = [req.body.text, req.body.title, req.body.user, req.body.tags]
      models.logs.post(params, function(err){
        if(err){}
        console.log('successful post')
      })
    }
  },

  tags: {
    get: function(req,res){
      models.tags.get(function(err,results){
        if(err){console.log(err)}
          res.json(results)
      })
    }
  },

  tagsByLogs: {
    get: function(req,res){
      models.tagsByLogs.get(req.params.id, function(err,results){
        if(err){console.log(err)}

          res.json(results)
      })
    }
  }


}