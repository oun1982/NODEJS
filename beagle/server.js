var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var app = express();
 
//var src_path = path.join(__dirname + '/src/js');
app.use(bodyParser.json());
app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('view options', { pretty: true });
//app.use('/static', express.static('src'))
function getHomePage(req, res) {
    //res.render('index.html');
    res.sendFile(path.join(__dirname + '/views/index.html'))
    //res.render('index.pug')
}

function getAuth(req, res) {
    //res.render('index.html');
    //res.sendFile(path.join(__dirname + '/views/index.html'))
    res.render('auth.pug')
}
app.get('/info', getAuth);
app.get('/', getHomePage);
 
// start server ด้วย port 3000
var server = app.listen(3000, function() {
    console.log('Express.js is running...');
    //console.log(path.join(__dirname + '/views/index.html'));

});