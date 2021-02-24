const express = require ('express');
const mysql = require('mysql');
const exphbs = require('express-handlebars');

var app = express();
var PORT = process.env.PORT || 3000;

//Delivering static folder
app.use(express.static('public'));
//Reading encoded url
app.use(express.urlencoded({extended: true}));
//Reading json body
app.use(express.json());
//Handlebars as the template engine
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');
//Routing to controller
app.use(require('./controllers/burgers_controller'));
//Start server
app.listen(PORT, console.log(`Listening to port ${PORT}`));