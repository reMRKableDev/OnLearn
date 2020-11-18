//require("dotenv").config();

const app = require("./loaders/express.loader");
require("./loaders/routes.loader")(app);

module.exports = app;
