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
      var params = [req.body.text, req.body.title, req.body.user]
      console.log(params)
      models.logs.post(params, function(err){
        if(err){console.log(err)}
        console.log('successful post')
      })
    }
  }
}