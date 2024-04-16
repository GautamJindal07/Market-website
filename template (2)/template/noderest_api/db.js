var mysql = require('mysql');
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Gaut@2003",
    database:"marketingproject"
});

con.connect(function(err){
    if(err){
        console.log("throw");
    }

    console.log("connected");
});

module.exports=con;