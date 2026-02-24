const mysql = require("mysql2")

const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "practice_db"
});

connection.query("SELECT * FROM users", (err, results) => {
    console.log(results);
});