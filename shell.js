#!/usr/bin/node
var exec = require('child_process').exec;
var testscript = exec('ls -lrt /usr/src');
console.log(testscript);

testscript.stdout.on('data', function(data){
    console.log(data); 
    //sendBackInfo();
});

testscript.stderr.on('data', function(data){
    console.log(data);
    triggerErrorStuff(); 
});

