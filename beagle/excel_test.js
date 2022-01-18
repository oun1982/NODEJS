//var fs = require('fs');
//var xlsx = require('node-xlsx');
//const util = require('util')
//var obj = xlsx.parse(__dirname + '/route-map.xlsx'); // parses a file
const XLSX = require('xlsx');
const workbook = XLSX.readFile('route-map2.xlsx');
const sheet_name_list = workbook.SheetNames;
var sansayObj = (XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]));
var operObj = (XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[1]]));

for(i=0; i < operObj.length; i++){
    var oper = (operObj[i]['operator']);
    //console.log(oper);
    //console.log('################################');
    
        /*if(oper == sansayObj){
            console.log("Route found",operObj);
        }else{
            console.log("Route not found",operObj);
        }*/
    }
    for(i=0; i < sansayObj.length; i++){
        var sansay = "";
        var sansay = (sansayObj[i]['sansay']);
        //console.log(sansay);
        //console.log('----------------------------------');
    }

console.log(oper);
console.log(sansay);
//console.log(sansayObj.length);
//console.log(operObj.length);

//for(var i = 0; i < sansayObj.length; i++ ){
    //console.log(obj_1[i]['sansay']);
    //console.log((sansayObj[i]),(obj_2[i]));
    //console.log(sansayObj[i]);

//console.log(JSON.stringify(obj, null, 2));
//console.log(obj.length);
//console.log(obj[0]['sansay']);
//console.log(obj[1]['sansay']);
//for(var i = 0; i < operObj.length; i++ ){
    //console.log(obj_1[i]['sansay']);
    //console.log((sansayObj[i]),(obj_2[i]));
//    console.log(sansayObj[i]);
//}