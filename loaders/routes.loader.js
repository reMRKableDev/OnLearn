const createError = require('http-errors');
const { apiPrefix } = require('../configs');
const indexRouter = require('../api/routes/index.routes');
const usersRouter = require('../api/routes/users.routes');
const coursesRouter = require('../api/routes/courses.routes');
const usersAuthRouter = require('../api/routes/users-auth.routes');
const instructorsRouter = require('../api/routes/instructors.routes');

module.exports = (app) => {
  app.use(apiPrefix, indexRouter);
  app.use(apiPrefix, usersRouter);
  app.use(apiPrefix, coursesRouter);
  app.use(apiPrefix, usersAuthRouter);
  app.use(apiPrefix, instructorsRouter);

  // Catch 404's and forward to error handler below
  app.use((req, res, next) => {
    next(createError(404));
  });

  // Error handler
  app.use((err, req, res) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
};
