// imports the basic modules
const path = require('path');
const express = require('express');
// imports the middleware module
const { middleware } = require('./middleware/middleware');

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

// get route for api
app.get('/api/code', function (req, res) {
	res.sendFile(path.join(__dirname, './db/code.json'));
});

// listening for requests
app.listen(PORT, function () {
	console.log(`App listening at http://localhost:${PORT}`);
});
