const passport = require('passport');
const { validationResult } = require('express-validator');
const { renderLoginFormWithErrorsHelper } = require('../helpers');

exports.loginUserController = (req, res, next) => {
  const { user, password } = req.body;

  return !user || !password
    ? renderLoginFormWithErrorsHelper(res, user, password)
    : passport.authenticate('local', {
        successRedirect: '/profile/:username',
        failureRedirect: '/login',
        failureFlash: true,
      })(req, res, next);
};
