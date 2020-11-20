const { validationResult } = require('express-validator');
const { renderRegistrationFormWithErrorsHelper } = require('./helpers');

exports.createNewUserController = async (req, res) => {
  // const { role } = req.body;
  const errors = validationResult(req);

  console.log(errors);

  return errors.array().length
    ? renderRegistrationFormWithErrorsHelper(res, req.body, errors)
    : res.send('posted');
};
