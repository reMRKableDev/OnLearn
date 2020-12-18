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
const { renderUserProfileController } = require('./usersControllers');
const {
  changeRoleToInstructor,
  renderBeInstructorController,
} = require('./instructorsControllers');

module.exports = {
  loginUserController,
  logoutUserController,
  renderLoginController,
  changeRoleToInstructor,
  renderRegisterController,
  renderIndexViewController,
  registerNewUserController,
  renderUserProfileController,
  renderBeInstructorController,
  authenticateGoogleLoginController,
  authenticateGoogleCallbackController,
};
