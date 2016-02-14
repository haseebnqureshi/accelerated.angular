module.exports = function(express, app, models) {

	app.use('/', express.static(process.env.ANGULAR_APP_PATH || 'www'));
	
	return app;
};