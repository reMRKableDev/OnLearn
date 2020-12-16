const LocalStrategy = require('passport-local').Strategy;
const User = require('../database/models/user.model');
const { handleAsyncFunction } = require('../utils/global-utils');
const { comparePasswordHelper } = require('./helpers');

exports.localStrategy = new LocalStrategy(
  { usernameField: 'user', passwordField: 'password' },
  async (user, password, done) => {
    const [userResults, error] = await handleAsyncFunction(
      User.findOne({ username: user })
    );

    if (error) {
      return done(error);
    }

    if (!userResults) {
      return done(null, false, { message: 'Incorrect username / email.' });
    }

    const isMatch = await comparePasswordHelper(password, userResults.password);

    if (!isMatch) {
      return done(null, false, { message: 'Incorrect password.' });
    }

    return done(null, userResults);
  }
);
