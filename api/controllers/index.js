const { renderIndexViewController } = require('./indexControllers');
const {
  loginUserController,
  logoutUserController,
  renderLoginController,
  renderRegisterController,
  registerNewUserController,
  authenticateGoogleLoginController,
  authenticateGoogleCallbackController,
} = require('./usersAuthControllers');
const {
  updateUserProfileController,
  renderUserProfileController,
  renderEditUserProfileController,
} = require('./usersControllers');
const {
  changeRoleToInstructor,
  renderBeInstructorController,
  renderCreateNewCourseController,
} = require('./instructorsControllers');

module.exports = {
  loginUserController,
  logoutUserController,
  renderLoginController,
  changeRoleToInstructor,
  renderRegisterController,
  renderIndexViewController,
  registerNewUserController,
  updateUserProfileController,
  renderUserProfileController,
  renderBeInstructorController,
  renderCreateNewCourseController,
  renderEditUserProfileController,
  authenticateGoogleLoginController,
  authenticateGoogleCallbackController,
};
