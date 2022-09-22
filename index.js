const cTable = require("console.table");
const dotenv = require("dotenv");
const fs = require("fs");
const inquirer = require("inquirer");
const mysql = require("mysql2");
const { listenerCount } = require("process");
const connect = require("./config/connection");

// add comments, then make the readme+ walkthrough video.

// connects us to the MySql server
connect.connect(function (err) {
	if (err) throw err;
	console.log("Connected to MySql server");
	openingPrompt();
});

// first prompt to decided which tree to send the user down
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

// when the user chooses to view, ask them what to view
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

// when the user chooses to update, ask who
function updatePrompt() {
	inquirer
		.prompt([
			{
				type: "list",
				name: "updaterPrompt",
				message: "Whose role would you like to update (by last name)",
				choices: [
					"Stevenson",
					"Bryant",
					"Blake",
					"Puckett",
					"Doe",
					"Cross",
					"Rivas",
					"Moore",
					"Hopper",
					"Goode",
					"Gould",
					"Grey",
					"Boyce",
				],
			},
		])
		.then(function ({ updaterPrompt }) {
			updateChoice = updaterPrompt;
			// console.log(updateChoice);
			updateRole(updateChoice);
		});
}

// when the user chooses to add, ask what to add
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

// print a table of the departments into the console
function viewDepartments() {
	const allDepartments = connect.query(
		"SELECT * FROM employee_tracker_db.department",
		function (err, results) {
			console.table(results);
			process.exit();
		}
	);
}

// print a table of the roles into the console
function viewRoles() {
	const allRoles = connect.query(
		"SELECT * FROM employee_tracker_db.roles",
		function (err, results) {
			console.table(results);
			process.exit();
		}
	);
}

// print a table of the employees into the console
function viewEmployees() {
	const allEmployees = connect.query(
		"SELECT * FROM employee_tracker_db.employee",
		function (err, results) {
			console.table(results);
			process.exit();
		}
	);
}

// allows user to update role, after getting the name from them, give them the list of available roles to choose. then change their role in the database, and print the updated table to the console.
function updateRole(updateChoice) {
	// fullNameGenerator();
	inquirer
		.prompt([
			{
				type: "list",
				name: "roleUpdater",
				message: `What would you like ${updateChoice}'s new role to be?`,
				choices: [
					"Grocery Manager",
					"Grocery Stocker",
					"Grocery Cashier",
					"Electronics Manager",
					"Electronics Stocker",
					"Electronics Cashier",
					"Home Manager",
					"Home Stocker",
					"Home Cashier",
				],
			},
		])
		// need to write the code to update the change in the db
		.then(function ({ roleUpdater }) {
			console.log(updateChoice);
			console.log("PRE", roleUpdater);

			if (roleUpdater === "Grocery Manager") {
				newId = 2;
			} else if (roleUpdater === "Grocery Stocker") {
				newId = 3;
			} else if (roleUpdater === "Grocery Cashier") {
				newId = 4;
			} else if (roleUpdater === "Electronics Manager") {
				newId = 5;
			} else if (roleUpdater === "Electronics Stocker") {
				newId = 6;
			} else if (roleUpdater === "Electronics Cashier") {
				newId = 7;
			} else if (roleUpdater === "Home Manager") {
				newId = 8;
			} else if (roleUpdater === "Home Stocker") {
				newId = 9;
			} else if (roleUpdater === "Home Cashier") {
				newId = 10;
			}

			console.log("POST", newId);
			const updateEmployeeRole = connect.query(
				`
				UPDATE employee	
				SET role_id = ${newId}
				WHERE last_name = '${updateChoice}';`,
				function (err, results) {
					if (err) throw err;
					console.table(results);
				}
			);
			const displayAllEmployees = connect.query(
				`SELECT * FROM employee_tracker_db.employee`,
				function (err, results) {
					if (err) throw err;
					console.table(results);
				}
			);
		});
}

// allows user to add a department to the database. give a name, it gets inserted into the table, then print to the console the updated table
function addDepartments() {
	inquirer
		.prompt([
			{
				type: "input",
				name: "departmentNameAdd",
				message: "What would you like to name the department?",
			},
		])
		.then(function ({ departmentNameAdd }) {
			const addDepartmentQuery = connect.query(
				`INSERT INTO department(name)
			VALUES ("${departmentNameAdd}");
			`,
				function (err, results) {
					if (err) throw err;
					console.table(results);
				}
			);
			const displayAllDepartments = connect.query(
				`SELECT * FROM employee_tracker_db.department`,
				function (err, results) {
					if (err) throw err;
					console.table(results);
				}
			);
		});
}

// allows user to add a roles to the database. give a name, salary, and the department ID, and then it gets inserted into the table, then print to the console the updated table
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
		.then(function ({ roleNameAdd, roleSalaryAdd, roleDepartmentIdAdd }) {
			const addRoleQuery = connect.query(
				`INSERT INTO roles (title, salary, department_id)
				VALUES ("${roleNameAdd}", ${roleSalaryAdd}, ${roleDepartmentIdAdd});`,
				function (err, results) {
					if (err) throw err;
					console.table(results);
				}
			);
			const displayAllRoles = connect.query(
				`SELECT * FROM employee_tracker_db.roles`,
				function (err, results) {
					if (err) throw err;
					console.table(results);
				}
			);
		});
}

// allows user to add a employee to the database. give a first name, last name, their role id, and their new managers id. then it gets inserted into the table, and printed to the console is the updated table
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
		.then(function ({
			employeeFirstNameAdd,
			employeeLastNameAdd,
			employeeRoleIDAdd,
			employeeManagerIDAdd,
		}) {
			const addEmployeeQuery = connect.query(
				`INSERT INTO employee (first_name, last_name, role_id, manager_id)
				VALUES ("${employeeFirstNameAdd}", "${employeeLastNameAdd}", ${employeeRoleIDAdd}, ${employeeManagerIDAdd});`,
				function (err, results) {
					if (err) throw err;
					console.table(results);
				}
			);
			const displayAllEmp = connect.query(
				`SELECT * FROM employee_tracker_db.employee;`,
				function (err, results) {
					if (err) throw err;
					console.table(results);
				}
			);
		});
}
