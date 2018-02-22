var fs = require('fs');
try{
  fs.readFile('script.txt', 'utf8', function(error, data){
      if(error){
        throw error;
        return;
      }
      console.log(data);});
}catch(error){
  console.error('This Error can\'t open file');
}
