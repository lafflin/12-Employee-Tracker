const { Model, DataTypes } = require("sequelize");
const connect = require("../config/connection");

class Department extends Model {}

Department.init({
	id: DataTypes.INTEGER,
	name: DataTypes.STRING(30),
	primaryKey: true,
	defaultValue: DataTypes.INTEGER,
});

module.exports = Department;
