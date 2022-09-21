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
		.then(function ({ viewingPrompt }) {
			switch (viewingPrompt) {
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
		.then(function ({ updaterPrompt }) {
			updateChoice = updaterPrompt;
			// console.log(updateChoice);
			updateRole(updateChoice);
		});
}

function addPrompt() {
	inquirer
		.prompt([
			{
				type: "list",
				name: "addingPrompt",
				message: "What would you like to add to?",
				choices: ["Departments", "Roles", "Employees"],
			},
		])
		.then(function ({ addingPrompt }) {
			console.log(addingPrompt);
			switch (addingPrompt) {
				case "Departments":
					addDepartments();
					break;
				case "Roles":
					addRoles();
					break;
				case "Employees":
					addEmployees();
					break;
			}
		});
}

function viewDepartments() {
	const allDepartments = connect.query(
		"SELECT * FROM employee_tracker_db.department",
		function (err, results) {
			console.table(results);
			process.exit();
		}
	);
}

function viewRoles() {
	const allRoles = connect.query(
		"SELECT * FROM employee_tracker_db.roles",
		function (err, results) {
			console.table(results);
			process.exit();
		}
	);
}

function viewEmployees() {
	const allEmployees = connect.query(
		"SELECT * FROM employee_tracker_db.employee",
		function (err, results) {
			console.table(results);
			process.exit();
		}
	);
}

function updateRole(updateChoice) {
	console.log("inside of updateRole() :", updateChoice);
	inquirer
		.prompt([
			{
				type: "list",
				name: "roleUpdater",
				message: `What would you like ${updateChoice}'s new role to be?`,
				choices: ["Grocery", "Electronics", "Home"],
			},
		])
		// need to write the code to update the change in the db
		.then(function ({ roleUpdater }) {});
}

function addDepartments() {
	inquirer
		.prompt([
			{
				type: "input",
				name: "departmentNameAdd",
				message: "What would you like to name the department?",
			},
		])
		// functionality needed for adding department to db
		.then(function ({ departmentNameAdd }) {});
}

function addRoles() {
	inquirer
		.prompt([
			{
				type: "input",
				name: "roleNameAdd",
				message: "What is the name of the role you would like to add?",
			},
			{
				type: "input",
				name: "roleSalaryAdd",
				message: "What is the salary for this new role",
			},
			{
				type: "input",
				name: "roleDepartmentIdAdd",
				message: "What is the department ID for this new role",
			},
		])
		// functionality needed for adding roles to db
		.then(function ({ roleNameAdd, roleSalaryAdd, roleDepartmentIdAdd }) {});
}

function addEmployees() {
	inquirer
		.prompt([
			{
				type: "input",
				name: "employeeFirstNameAdd",
				message: "What is the first name of the new employee?",
			},
			{
				type: "input",
				name: "employeeLastNameAdd",
				message: "What is their last name",
			},
			{
				type: "input",
				name: "employeeRoleIDAdd",
				message: "What is the ID of their new role",
			},
			{
				type: "input",
				name: "employeeManagerIDAdd",
				message: "What is the ID of their new manager",
			},
		])
		// functionality needed for adding employees to db
		.then(function ({
			employeeFirstNameAdd,
			employeeLastNameAdd,
			employeeRoleIDAdd,
			employeeManagerIDAdd,
		}) {});
}
