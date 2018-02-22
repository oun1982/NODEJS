console.log('one event loop cycle');
setTimeout(function(){console.log('diffent cycle');}, 100);
console.log('same cycle');
setInterval(function(){console.log('Task A');},2000);
setInterval(function(){console.log('Task B');},1000);

/*setInterval(function(){
    while (true);
    console.log('Task B')},15);
*/
