#!/usr/bin/node
var log4js = require("log4js");
var logger = log4js.getLogger();
logger.debug("Some debug message");

var fs = require("fs");
fs.readFile("test.js", "utf8", function(err, content){
	if(err) throw err;
	console.log(content);	


});

console.log("After call readFile");
