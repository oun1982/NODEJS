#!/usr/bin/node
var x = 24;
console.log(typeof x);
console.log(x);
console.log('HelloWorld');

function say(word){
	console.log('Your Word : ' + word);

}

function answer(){
	console.log('Say Answer');

}

function sum(answer, value){
	answer(value);	
}

sum('Pongsakon');
console.log('HelloWorld');
console.log('HelloWorld2');