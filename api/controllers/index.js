const { renderIndexViewController } = require('./indexControllers');
const {
  loginUserController,
  logoutUserController,
  renderLoginController,
  renderRegisterController,
  registerNewUserController,
  renderUserProfileController,
  authenticateGoogleLoginController,
  authenticateGoogleCallbackController,
} = require('./usersControllers');

module.exports = {
  loginUserController,
  logoutUserController,
  renderLoginController,
  renderRegisterController,
  renderIndexViewController,
  registerNewUserController,
  renderUserProfileController,
  authenticateGoogleLoginController,
  authenticateGoogleCallbackController,
};
