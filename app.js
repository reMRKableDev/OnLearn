const app = require('./loaders/express.loader');
require('./loaders/mongoose.loader')();
require('./loaders/routes.loader')(app);

module.exports = app;
