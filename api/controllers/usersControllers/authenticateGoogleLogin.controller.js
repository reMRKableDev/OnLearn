const passport = require('passport');

exports.authenticateGoogleLoginController = passport.authenticate('google', {
  scope: ['profile', 'email'],
});
