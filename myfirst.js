// Modules init
var express = require('express');
var ejs = require('ejs');

// App init
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.listen(8080);

app.get('/', function(req, res) {
  res.render('index.ejs');
});