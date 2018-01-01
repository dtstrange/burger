var express = require("express");
var exphbs  = require('express-handlebars');
var methodOverride = require('method-override')
var bodyParser = require('body-parser')

var app = express();
var PORT = process.env.PORT || 3000;

app.use(methodOverride('X-HTTP-Method-Override'));
app.use(bodyParser.urlencoded({ extended: false }));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.listen(3000);