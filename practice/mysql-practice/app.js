require('dotenv').config();
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.query("SELECT DATABASE()", (err, results) => {
    console.log(results);
});

console.log("クエリ実行前");

connection.query(
    "INSERT INTO users (name) VALUES (?)",
    ["Taro"],
    (err, results) => {
    if (err) {
        console.error("エラー:", err);
        return;
    }
    console.log("成功:", results);
    }
);

console.log("クエリ投げた直後");