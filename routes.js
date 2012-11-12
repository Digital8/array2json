var fs = require('fs')
  , controllers = {};

// Geat all the controllers that are in the controllers directory
fs.readdirSync("./controllers").forEach(function(module){
  controllers[module.split('.')[0]] = require("./controllers/" + module);
});

module.exports = function(app){
  app.get('/', controllers.index.index);
  app.post('/', controllers.index.create);
  app.get('/faq', function(req,res){
    res.send('faq page');
  });
  app.get('/how-it-works', controllers.hiw.index);
};