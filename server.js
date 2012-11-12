/** Module dependencies. **/

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , config = require('./config');

var app = express();

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  
  app.use(function(req,res,next){
    res.locals.title = config.title;
    next();
  });
  
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

require('./routes')(app);

http.createServer(app).listen(config.port, function(){
  console.log(config.title + " server listening on port " + config.port);
});
