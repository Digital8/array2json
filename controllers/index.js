var jsonify = require('../lib/helpers/jsonify');


var controller = {
  
  // GET
  index: function(req,res){
    //res.send(end);
    res.render('index');
  },
  
  // GET
  view: function(req,res){
    
  },
  
  // GET
  add: function(req,res){
    
  },
  
  // POST
  create: function(req,res){
    res.send(jsonify(req.body.txtInput));
  },
  
  // GET
  edit: function(req,res){
    
  },
  
  // PUT
  update: function(req,res){
    
  },
  
  // DELETE
  destroy: function(req,res){
    
  }
};

module.exports = controller;