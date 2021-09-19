const mysql= require("mysql");
var connection= mysql.createPool({
    connectionLimit:4,
    host:"localhost",
    user:"root",
    password:"",
    database:"bankdb"
});

module.exports=connection;