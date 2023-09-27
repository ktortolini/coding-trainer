const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// adds User class definition
class Score extends Model {}
// initializes the User
Score.init(
	{
		// adds wpm
		wpm: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		// adds correct
		correct: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		// adds the user_name
		user_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: 'score',
		underscored: true,
		freezeTableName: true,
	},
);

module.exports = Score;
