const { createNewUserHelper } = require('./createNewUser.helper');
const {
  renderLoginFormWithErrorsHelper,
} = require('./renderLoginFormWithErrors.helper');
const {
  renderRegistrationFormWithErrorsHelper,
} = require('./renderRegistrationFormWithErrors.helper');

module.exports = {
  createNewUserHelper,
  renderLoginFormWithErrorsHelper,
  renderRegistrationFormWithErrorsHelper,
};
