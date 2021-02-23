const express = require ('express');
const mysql = require('mysql');


var app = express();
var PORT = process.env.PORT || 3000;


app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api', require('./model/burger'));

app.listen(PORT, console.log(`Listening to port ${PORT}`));