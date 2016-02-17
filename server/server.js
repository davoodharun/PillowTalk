var express = require('express');
var fs = require('fs');
var sql = require('mysql')
var app = express();
var db = require('./db');
// var router = require('./routes.js')


// // configure our server with all the middleware and routing
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

// start listening to requests on port 8000
app.listen(8000);
var router = require('express').Router();
var controller = require('./controllers');
app.use("/", router);
router.get('/api/logs', controller.logs.get)
router.get('/api/tag', controller.tags.get)
router.get('/api/users/:id', controller.users.get)
router.get('/api/tagsByLogs/:id', controller.tagsByLogs.get)
router.post('/api/logs', controller.logs.post)


// export our app for testing and flexibility, required by index.js
module.exports = app;
