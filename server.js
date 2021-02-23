const express = require ('express');
const mysql = require('mysql');
const exphbs = require('express-handlebars');


var app = express();
var PORT = process.env.PORT || 3000;























app.listen(PORT, console.log(`Listening to port ${PORT}`));