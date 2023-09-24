const { User } = require('../models');
const sequelize = require('../config/connection');
// adds a guest user
const userData = [
	{
		name: 'Guest',
	},
];
// adds the guest user
const seedDatabase = async () => {
	await sequelize.sync({ force: true });
	// creates the starting user tables
	await User.bulkCreate(userData, {
		individualHooks: false,
		returning: true,
	});
	process.exit(0);
};

seedDatabase();
