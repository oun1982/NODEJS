      var mysql = require('mysql');
      var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "nodelogin"
      });
 
  con.query("SELECT * FROM  accounts", function (err, result, fields) {
    if (err) throw err;
      console.log(result);
  });
  con.end();
      //con.connect(function(err) {
      //  if (err) throw err;
      //  console.log("Connected!");
      //  con.query("SELECT * FROM  accounts", function (err, result, fields) {
      //    if (err) throw err;
      //    console.log(result);
      //  });
      //});
//module.exports = {mysql}
