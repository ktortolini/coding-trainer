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
	cookie: {
		secure: true,
		maxAge: 300000,
		httpOnly: true,
		sameSite: 'strict',
	},
	resave: false,
	saveUninitialized: true,
	store: new SequelizeStore({
		db: sequelize,
	}),
};
// uses the configuration
app.use(session(sess));

// the middleware for serving static files
app.use(middleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //decrypts
app.use(express.static(path.join(__dirname, 'public')));

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
			req.session.user_name = userData.name;
			req.session.logged_in = true;
		});
		// this is for debugging purposes
		console.log(`req.session = ${JSON.stringify(req.session)}`);
		// returns the userData
		res.status(200).json(userData);
	} catch (err) {
		// this is for debugging purposes
		console.log(`catch (${err.stack})`);
		// reloads the page
		res.redirect('/');
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
	const score = {
		wpm: req.body.wpm,
		correct: req.body.correct,
		user_name: req.body.user_name,
	};
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
	// pushes to array
	data.push(score);
	// sorts the array with a ratio of wpm and correct
	data.sort((value1, value2) => {
		// assigns a weighted value for correct
		let weightValue1 = value1.correct * 0.25;
		let weightValue2 = value2.correct * 0.25;
		// adds the correct values to the cpm value
		let totalScore1 = value1.wpm + weightValue1;
		let totalScore2 = value2.wpm + weightValue2;
		// returns a value for sorting purposes
		return totalScore2 - totalScore1;
	});
	// prunes the scores to maintain 10 entries
	if (data.length > 10) {
		// removes the last score
		data.pop();
	}
	// writes the data to the json file
	fs.writeFileSync('./db/json/scores.json', JSON.stringify(data));
	// inserts the data into table
	Score.create(score)
		.then(() => {
			console.log('Data inserted successfully');
		})
		.catch((error) => {
			console.error('Error inserting data:', error);
		});
	res.json(data);
});

// syncs the sequelize models and starts the server
sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () =>
		console.log(`Now listening on http://localhost:${PORT}`),
	);
});
