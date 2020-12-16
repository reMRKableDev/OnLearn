const { createNewUserHelper } = require('./createNewUser.helper');
const {
  renderLoginFormWithErrorsHelper,
} = require('./renderLoginFormWithErrors.helper');
const {
  renderRegistrationFormWithErrorsHelper,
} = require('./renderRegistrationFormWithErrors.helper');
const { authenticateUserHelper } = require('./authenticateUser.helper');

module.exports = {
  createNewUserHelper,
  authenticateUserHelper,
  renderLoginFormWithErrorsHelper,
  renderRegistrationFormWithErrorsHelper,
};
