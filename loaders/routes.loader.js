const createError = require("http-errors");
const { apiPrefix } = require("../configs");

module.exports = (app) => {
  app.use(apiPrefix, require("../api/routes/"));
  app.use(apiPrefix, require("../api/routes/users"));

  // Catch 404's and forward to error handler below
  app.use((req, res, next) => {
    next(createError(404));
  });

  // Error handler
  app.use(function (err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
  });
};
