require("dotenv").config();
const mysql = require("mysql2");

const connect = mysql.createConnection({
	password: process.env.DB_PASSWORD,
	user: process.env.DB_USER,
	database: process.env.DB_NAME,
});

module.exports = connect;
