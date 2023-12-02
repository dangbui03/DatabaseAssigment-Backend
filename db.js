const mysql = require('mysql');
// const conected = 
const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "7cayxanH",
    database: "cinema"
});

connection.connect((err) => {
    if(err) {
        console.log("An error occurred: " + err);
        return;
    } 
    console.log("Mysql connected successfully")
})

module.exports = {connection}