// imports the basic modules
const fs = require('fs');
const path = require('path');
const uniqId = require('uniqid');
const express = require('express');
const session = require('express-session');
// imports the middleware module
const { middleware } = require('./middleware/middleware');
// imports models for score and user
const { User, Score } = require('./models');
// imports the sequelize connection
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// configures the session
const sess = {
	secret: 'mhs45b4773cr912x',
	cookie: {},
	resave: false,
	saveUninitialized: true,
	store: new SequelizeStore({
		db: sequelize,
	}),
};

// the middleware for serving static files
app.use(middleware);
app.use(express.json());
app.use(express.static('public'));

// get route for homepage
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, './public/index.html'));
});

// get route for trainer page
app.get('/trainer', function (req, res) {
	res.sendFile(path.join(__dirname, './public/trainer.html'));
});

// post route for user
app.post('/user', async function (req, res) {
	try {
		const userData = await User.create({
			name: req.body.name,
		});
		// sets the variables for the session
		req.session.save(() => {
			req.session.user_id = userData.id;
			req.session.user_name = userData.name;
			req.session.logged_in = true;
		});
		// returns the userData
		res.status(200).json(userData);
	} catch (err) {
		res.status(400).json(err);
		// this is for debugging purposes
		console.log(`catch (${err.message})`);
	}
});

// get routes for api code and scores
app.get('/api/code', function (req, res) {
	res.sendFile(path.join(__dirname, './db/json/code.json'));
});

app.get('/api/scores', (req, res) => {
	res.sendFile(path.join(__dirname, './db/json/scores.json'));
});

// post route for api scores
app.post('/api/scores', function (req, res) {
	// creates a new score
	let data = [];
	const score = req.body;
	try {
		// reads and parses the database file
		data = JSON.parse(fs.readFileSync('./db/json/scores.json', 'utf8'));
	} catch (err) {
		// this is for debugging purposes
		console.log(`catch (${err.message})`);
	}
	// this is for debugging purposes
	console.log(`const data = ${JSON.stringify(data)}`);
	console.log(`const score = ${JSON.stringify(req.body)}`);
	// adds a unique id
	score.id = uniqId();
	// pushes to array
	data.push(score);
	// sorts the array in descending order
	data.sort((value1, value2) => value2.wpm - value1.wpm);
	// writes the data to the database
	fs.writeFileSync('./db/json/scores.json', JSON.stringify(data));
	res.json(data);
});

// listening for requests
app.listen(PORT, function () {
	console.log(`App listening at http://localhost:${PORT}`);
});
