const passport = require('passport');
const User = require('../database/models/user.model');
const { handleAsyncFunction } = require('../utils/global-utils');

passport.serializeUser((loggedInUser, done) => {
  const { _id } = loggedInUser;

  done(null, _id);
});

passport.deserializeUser(async (userIdFromSession, done) => {
  const [results, error] = await handleAsyncFunction(
    User.findById(userIdFromSession)
  );

  return error ? done(error) : done(null, results);
});
