var jsonify = require('../lib/helpers/jsonify');
var coffeeScript = require('coffee-script');

function compile(input) {
	return coffeeScript.compile(input, { bare: true });
}

function parse(input) {
	return eval(compile(input));
}

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
    //res.send(jsonify(req.body.txtInput));
	res.send(compile(req.body.txtInput));
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