const passport = require('passport');

exports.authenticateGoogleCallbackController = passport.authenticate('google', {
  successRedirect: '/profile',
  failureRedirect: '/',
  failureFlash: true,
});
