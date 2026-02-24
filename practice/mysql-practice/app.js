const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "practice_db"
});


console.log("クエリ実行前");

connection.query(
    "INSERT INTO user (name) VALUES (?)",
    ["Hanachan"],
    (err, results) => {
    console.log("クエリ実行後");
    console.log(results);
    }
);

console.log("クエリ投げた直後");