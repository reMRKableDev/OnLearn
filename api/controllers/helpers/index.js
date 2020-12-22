const { createNewUserHelper } = require('./createNewUser.helper');
const { render500ErrorHelper } = require('./render500Error.helper');
const { authenticateUserHelper } = require('./authenticateUser.helper');
const { checkIfValidObjectIdHelper } = require('./checkIfValidObjectId.helper');
const {
  renderLoginFormWithErrorsHelper,
} = require('./renderLoginFormWithErrors.helper');
const {
  renderRegistrationFormWithErrorsHelper,
} = require('./renderRegistrationFormWithErrors.helper');

module.exports = {
  createNewUserHelper,
  render500ErrorHelper,
  authenticateUserHelper,
  checkIfValidObjectIdHelper,
  renderLoginFormWithErrorsHelper,
  renderRegistrationFormWithErrorsHelper,
};
