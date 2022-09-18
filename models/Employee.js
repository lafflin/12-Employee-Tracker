const sequelize = require("sequelize");
const { Model, DataTypes } = require("sequelize");
const connect = require("../config/connection");

class Employee extends Model {}

const Employee = connect({
	id: DataTypes.INTEGER,
	first_name: DataTypes.STRING(30),
	last_name: DataTypes.STRING(30),
	role_id: DataTypes.INTEGER,
	manager_id: DataTypes.INTEGER,
	primaryKey: true,
	defaultValue: DataTypes.INTEGER,
});

module.exports = Employee;
