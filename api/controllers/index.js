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
  updateUserProfile,
  renderUserProfileController,
  renderEditUserProfileController,
} = require('./usersControllers');
const {
  changeRoleToInstructor,
  renderBeInstructorController,
} = require('./instructorsControllers');

module.exports = {
  updateUserProfile,
  loginUserController,
  logoutUserController,
  renderLoginController,
  changeRoleToInstructor,
  renderRegisterController,
  renderIndexViewController,
  registerNewUserController,
  renderUserProfileController,
  renderBeInstructorController,
  renderEditUserProfileController,
  authenticateGoogleLoginController,
  authenticateGoogleCallbackController,
};
