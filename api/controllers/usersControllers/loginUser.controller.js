const {
  authenticateUserHelper,
  renderLoginFormWithErrorsHelper,
} = require('../helpers');

exports.loginUserController = (req, res, next) => {
  const { user, password } = req.body;

  return !user || !password
    ? renderLoginFormWithErrorsHelper(res, user, password)
    : authenticateUserHelper(req, res, next);
};
