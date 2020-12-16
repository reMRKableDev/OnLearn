const passport = require('passport');

exports.authenticateUserHelper = (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true,
  })(req, res, next);
};
