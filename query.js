#!/usr/bin/node

var Client = require('mariasql');

var c = new Client({
  host: '127.0.0.1',
  user: 'root',
  password: 'secret',
  db: 'asteriskcdrdb'
});

c.query('SELECT calldate, src, dst, billsec, disposition  FROM cdr', function(err, rows) {
  if (err){
    throw err;
  }
  //console.dir(rows);
  
  //console.dir(rows[0]);
  //console.log(rows[0].extension);
  console.log(rows);
});

c.end();
