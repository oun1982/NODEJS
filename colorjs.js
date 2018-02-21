//var colors = require('colors');
//console.log('Hello'.black);
exports.add1 = add;
exports.multiply = multiply;
exports.factorial = factorial;
exports.now = Date.now();
function add(num1, num2){
  return parseInt(num1, 10) + parseInt(num2, 10)
}

function multiply(num1, num2){
  return parseInt(num1, 10) * parseInt(num2, 10);
}

function factorial(num1){
  if(num == 0){
    return 1;
  }else{
    return num * factorial(num1 - 1)
  }
}
