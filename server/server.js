var express = require('express');
var fs = require('fs');
var path = require('path');

var app = express();



// // configure our server with all the middleware and routing
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

// start listening to requests on port 8000
app.listen(8000);


// app.get('/', fs.readFileSync(', options);)

// export our app for testing and flexibility, required by index.js
module.exports = app;
