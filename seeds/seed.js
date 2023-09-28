// uses fs to write files
const fs = require('fs');
const path = require('path');
// imports other important modules
const { User, Score } = require('../models');
const sequelize = require('../config/connection');
// adds a guest user
const userData = [
	{
		name: 'Guest',
	},
];
// adds the guest user
const seedDatabase = async () => {
	await sequelize.sync({ force: false });
	// creates the starting user tables
	await User.bulkCreate(userData, {
		individualHooks: false,
		returning: true,
	});
	process.exit(0);
};

const readDatabase = async () => {
	// syncs the sequelize models
	await sequelize.sync({ force: false });
	// starts to find the scores and write them
	const scores = await Score.findAll();
	// sorts the scores
	scores.sort((value1, value2) => {
		// assigns a weighted value for correct
		let weightValue1 = value1.correct * 0.25;
		let weightValue2 = value2.correct * 0.25;
		// adds the correct values to the cpm value
		let totalScore1 = value1.wpm + weightValue1;
		let totalScore2 = value2.wpm + weightValue2;
		// returns a value for sorting purposes
		return totalScore2 - totalScore1;
	});
	// pops out entries past 10
	while (scores.length > 10) {
		scores.pop();
	}
	fs.writeFile(
		path.join(__dirname, '../db/json/scores.json'),
		JSON.stringify(scores),
		(error) => {
			if (error) {
				console.log(err.stack);
			}
		},
	);
};

readDatabase();
