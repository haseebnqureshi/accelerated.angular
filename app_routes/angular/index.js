module.exports = function(express, app, models) {

	app.get('/*', function(req, res) {
		return res.status(200).sendFile(process.env.HOME + '/' 
			+ process.env.ANGULAR_APP_PATH || 'www' + '/'
			+ process.env.ANGULAR_APP_INDEX || 'index.html');
	});

	return app;
};