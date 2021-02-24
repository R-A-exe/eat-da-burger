const mysql = require('mysql');
var connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    connection = mysql.createConnection(
       {
           host: 'localhost',
           port: 3306,
           user: 'testUser',
           password: 'password',
           database: 'burgers_db'
       }
   );
}

connection.connect(()=>console.log('Database connected'));
module.exports = connection;