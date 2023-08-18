// custom middleware that logs out the type and path of each request to the server
const middleware = (req, res, next) => {
	switch (req.method) {
		case 'GET': {
			console.info(`Done: ${req.method} request to ${req.path}`);
			break;
		}
		case 'POST': {
			console.info(`Done: ${req.method} request to ${req.path}`);
			break;
		}
		default:
			console.log(`Warning: ${req.method} request to ${req.path}`);
	}
	next();
};

exports.middleware = middleware;