const connect = require("../config/connection");
const Department = require("../models/Department");
const Role = require("../models/Role");
const Employee = require("../models/Employee");

const departments = [
	{
		id: 99,
		name: "Whole Store",
	},
	{
		id: 1,
		name: "Grocery",
	},
	{
		id: 2,
		name: "Electronics",
	},
	{
		id: 3,
		name: "Home",
	},
];

const roles = [
	{
		id: 99,
		title: "Store Manager",
		salary: 100000,
		department_id: 99,
	},
	{
		id: 1,
		title: "Grocery Manager",
		salary: 75000,
		department_id: 1,
	},
	{
		id: 2,
		title: "Grocery Stocker",
		salary: 35000,
		department_id: 1,
	},
	{
		id: 3,
		title: "Grocery Cashier",
		salary: 30000,
		department_id: 1,
	},
	{
		id: 4,
		title: "Electronics Manager",
		salary: 75000,
		department_id: 2,
	},
	{
		id: 5,
		title: "Electronics Stocker",
		salary: 35000,
		department_id: 2,
	},
	{
		id: 6,
		title: "Electronics Cashier",
		salary: 30000,
		department_id: 2,
	},
	{
		id: 7,
		title: "Home Manager",
		salary: 75000,
		department_id: 3,
	},
	{
		id: 8,
		title: "Home Stocker",
		salary: 35000,
		department_id: 3,
	},
	{
		id: 9,
		title: "Home Cashier",
		salary: 30000,
		department_id: 3,
	},
];

const employees = [
	{
		id: 99,
		first_name: "Brian",
		last_name: "Stevenson",
		role_id: 99,
		manager_id: 99,
	},
	{
		id: 1,
		first_name: "Hector",
		last_name: "Bryant",
		role_id: 1,
		manager_id: 99,
	},
	{
		id: 2,
		first_name: "Jessica",
		last_name: "Blake",
		role_id: 2,
		manager_id: 1,
	},
	{
		id: 3,
		first_name: "Sam",
		last_name: "Puckett",
		role_id: 3,
		manager_id: 1,
	},
	{
		id: 4,
		first_name: "John",
		last_name: "Doe",
		role_id: 3,
		manager_id: 1,
	},
	{
		id: 5,
		first_name: "Hannah",
		last_name: "Crass",
		role_id: 4,
		manager_id: 99,
	},
	{
		id: 6,
		first_name: "Larry",
		last_name: "Rivas",
		role_id: 5,
		manager_id: 5,
	},
	{
		id: 7,
		first_name: "Nola",
		last_name: "Moore",
		role_id: 6,
		manager_id: 5,
	},
	{
		id: 8,
		first_name: "Zack",
		last_name: "Hopper",
		role_id: 6,
		manager_id: 5,
	},
	{
		id: 9,
		first_name: "Anika",
		last_name: "Goode",
		role_id: 7,
		manager_id: 99,
	},
	{
		id: 10,
		first_name: "Callam",
		last_name: "Gould",
		role_id: 8,
		manager_id: 9,
	},
	{
		id: 11,
		first_name: "Norah",
		last_name: "Grey",
		role_id: 8,
		manager_id: 9,
	},
	{
		id: 12,
		first_name: "Roshan",
		last_name: "Boyce",
		role_id: 9,
		manager_id: 9,
	},
];

const seed = () => {
	return Department.bulkCreate(departments).then(() =>
		Role.bulkCreate(roles).then(() => Employee.bulkCreate(employees))
	);
};

seed().then(() => {
	process.exit();
});
