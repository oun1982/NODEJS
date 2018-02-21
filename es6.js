#!/usr/bin/node
class Chat{
	constructor(message){
		this.message = message;

	}
	say(){
		console.log(this.message);

	}

}

let chat = new Chat("Hello, World");
chat.say();

let array = ["A", "B", "C"];
console.log(array.includes("A"));
console.log(10 * 2);
