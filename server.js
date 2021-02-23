const express = require ('express');
const mysql = require('mysql');
const exphbs = require('express-handlebars');

var app = express();
var PORT = process.env.PORT || 3000;


app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.use('/*',require('./controllers/burgers_controller'));

app.listen(PORT, console.log(`Listening to port ${PORT}`));