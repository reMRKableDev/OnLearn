const passport = require('passport');
const User = require('../database/models/user.model');

passport.serializeUser((loggedInUser, done) => {
  console.log('LOGGEDIN USER', loggedInUser);
  const { _id } = loggedInUser;

  done(null, _id);
});

passport.deserializeUser((userIdFromSession, done) => {
  console.log('DESERIALIZE', userIdFromSession);
  User.findById(userIdFromSession, (err, userDocument) => {
    if (err) {
      done(err);
      return;
    }

    console.log('USER DOCUMENT', userDocument);

    done(null, userDocument);
  });
});
