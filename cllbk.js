#!/usr/bin/node
function second(data_back){
	console.log("Work Second");
	console.log(data_back);
}

function first(callback){
	console.log("Work First");
	callback("My data send callback");
}
first(second);
