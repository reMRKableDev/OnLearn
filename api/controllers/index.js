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
const { renderBeInstructorController } = require('./instructorControllers');

module.exports = {
  loginUserController,
  logoutUserController,
  renderLoginController,
  renderRegisterController,
  renderIndexViewController,
  registerNewUserController,
  renderUserProfileController,
  renderBeInstructorController,
  authenticateGoogleLoginController,
  authenticateGoogleCallbackController,
};
