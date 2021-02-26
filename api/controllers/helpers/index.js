const { filterCoursesHelper } = require('./filterCourses.helper');
const { createNewUserHelper } = require('./createNewUser.helper');
const { render500ErrorHelper } = require('./render500Error.helper');
const { authenticateUserHelper } = require('./authenticateUser.helper');
const { checkIfValidObjectIdHelper } = require('./checkIfValidObjectId.helper');
const {
  handleUpdatedPasswordHelper,
} = require('./handleUpdatedPassword.helper');
const {
  renderLoginFormWithErrorsHelper,
} = require('./renderLoginFormWithErrors.helper');
const {
  renderRegistrationFormWithErrorsHelper,
} = require('./renderRegistrationFormWithErrors.helper');
const {
  redirectNonExistentDataHelper,
} = require('./redirectNonExistentData.helper');
const {
  checkCurrentUserRelationToCourseHelper,
} = require('./checkCurrentUserRelationToCourse.helper');

module.exports = {
  filterCoursesHelper,
  createNewUserHelper,
  render500ErrorHelper,
  authenticateUserHelper,
  checkIfValidObjectIdHelper,
  handleUpdatedPasswordHelper,
  redirectNonExistentDataHelper,
  renderLoginFormWithErrorsHelper,
  checkCurrentUserRelationToCourseHelper,
  renderRegistrationFormWithErrorsHelper,
};
