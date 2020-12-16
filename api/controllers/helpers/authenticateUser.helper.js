const passport = require('passport');

exports.authenticateUserHelper = (req, res, next) =>
  passport.authenticate('local', {
    successRedirect: '/profile/:username',
    failureRedirect: '/login',
    failureFlash: true,
  })(req, res, next);
