var fs = require('fs');
/*fs.readFile('log.log', 'utf8', function(error, data){
    if(error){
      return console.log.error(error);
    }
    console.log(data);
});
*/
//var exec = require('child_process').exec;
//exec('wc -l file_test.js', function(error, result){
//    console.log('line of file = ' + result)
//});

try{
  var data = fs.readFileSync('log.log', 'utf8');
  console.log(data);
}catch(error){
  console.error(error);
}
