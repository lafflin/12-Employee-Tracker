const sequelize = require("sequelize");
const { Model, DataTypes } = require("sequelize");
const connect = require("../config/connection");

class Role extends Model {}

const Role = connect({
	id: DataTypes.INTEGER,
	title: DataTypes.STRING(30),
	salary: DataTypes.DECIMAL,
	department_id: DataTypes.INTEGER,
	primaryKey: true,
	defaultValue: DataTypes.INTEGER,
});

module.exports = Role;
