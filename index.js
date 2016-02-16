
module.exports = function() {

	var app = require('accelerated.api')();

	app.useMiddlewares([ 'angular' ], __dirname);

	app.useRoutes([ 'angular' ], __dirname);

	app.run();

	return app;

};

