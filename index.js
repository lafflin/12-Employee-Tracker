const cTable = require("console.table");
const dotenv = require("dotenv");
const fs = require("fs");
const inquirer = require("inquirer");
const mysql = require("mysql2");
const { listenerCount } = require("process");
const connect = require("./config/connection");

connect.connect(function (err) {
	if (err) throw err;
	console.log("Connected to MySql server");
	openingPrompt();
});

function openingPrompt() {
	inquirer
		.prompt([
			{
				type: "list",
				name: "firstQuestion",
				message: "Welcome to the employee tracker! What would you like to do?",
				choices: ["View", "Update Role", "Add"],
			},
		])
		.then(function ({ firstQuestion }) {
			switch (firstQuestion) {
				case "View":
					viewPrompt();
					break;
				case "Update Role":
					updatePrompt();
					break;
				case "Add":
					addPrompt();
					break;
			}
		});
}
function viewPrompt() {
	inquirer
		.prompt([
			{
				type: "list",
				name: "viewingPrompt",
				message: "What would you like to view?",
				choices: ["Departments", "Roles", "Employees"],
			},
		])
		.then(function () {
			switch (viewPrompt) {
				case "Departments":
					viewDepartments();
					break;
				case "Roles":
					viewRoles();
					break;
				case "Employees":
					viewEmployees();
					break;
			}
		});
}

function updatePrompt() {
	inquirer
		.prompt([
			{
				type: "list",
				name: "updaterPrompt",
				message: "Whose role would you like to update",
				choices: [
					"Brian Stevenson",
					"Hector Bryant",
					"Jessica Blake",
					"Sam Puckett",
					"John Doe",
					"Hannah Cross",
					"Larry Rivas",
					"Nola Moore",
					"Zack Hopper",
					"Anika Goode",
					"Callam Gould",
					"Norah Grey",
					"Roshan Boyce",
				],
			},
		])
		.then(function () {
			console.log(updatePrompt);
		});
}

// function addPrompt() {
// 	// inquirer.prompt([{}]);
// }

// function viewDepartments() {}
// function viewRoles() {}
// function viewEmployees() {}
