const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// imports the bad-words module
const BadWords = require('bad-words');
// adds an instance of the bad-words module
const alphaCheck = new BadWords();
// adds User class definition
class User extends Model {}
// initializes the User
User.init(
	{
		// adds the username
		name: {
			type: DataTypes.STRING,
			allowNull: true,
			primaryKey: false,
			validate: {
				isCivil(value) {
					if (alphaCheck.isProfane(value)) {
						window.alert(`alphaCheck.isProfane(${value})`);
						throw new Error(`alphaCheck.isProfane(${value})`);
					}
				},
			},
		},
	},
	{
		sequelize,
		modelName: 'user',
		underscored: true,
		freezeTableName: true,
	},
);

module.exports = User;
