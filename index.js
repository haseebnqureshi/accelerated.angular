
var app = require('accelerated.api')();
app.useMiddlewares([ 'angular' ]);
app.useRoutes([ 'angular' ]);
app.run();
