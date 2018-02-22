var test = require('./colorjs');
console.log(test.add1(3,5));
console.log(test.multiply(3,5));

//setTimeout(function(){color = require('./colorjs');
//  console.log('Time after second require ' + color.now)
//},3000);
var tout = function(){console.log('Timeout ' + test.now);}
setTimeout(tout, 2000);
