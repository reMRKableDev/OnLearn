const { validationResult } = require('express-validator');
const {
  createNewUserHelper,
  renderRegistrationFormWithErrorsHelper,
} = require('../helpers');

exports.createNewUserController = (req, res) => {
  // const { role } = req.body;
  const errors = validationResult(req);

  return errors.array().length
    ? renderRegistrationFormWithErrorsHelper(res, req, errors)
    : createNewUserHelper(req, res);
};
