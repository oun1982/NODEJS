var fs = require('fs');
var content;
let res_exten_file = fs.readFile("extensions_beagle.conf",'utf-8', function read(err, data){
    if(err){
        throw err;
    }
    return data;
});
console.log(res_exten_file);