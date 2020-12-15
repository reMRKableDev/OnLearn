const passport = require('passport');
const User = require('../database/models/user.model');

passport.serializeUser((loggedInUser, done) => {
  const { _id } = loggedInUser;

  done(null, _id);
});

passport.deserializeUser((userIdFromSession, done) => {
  User.findById(userIdFromSession, (err, userDocument) => {
    if (err) {
      done(err);
      return;
    }

    done(null, userDocument);
  });
});
