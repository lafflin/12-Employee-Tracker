const cTable = require("console.table");
const dotenv = require("dotenv");
const fs = require("fs");
const inquirer = require("inquirer");
const mysql = require("mysql2");
const connect = require("./config/connection");

connect.connect(function (err) {
	if (err) throw err;
	console.log("Connected to MySql server");
});

// inquirer.prompt([]);
