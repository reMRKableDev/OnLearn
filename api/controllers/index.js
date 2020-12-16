const { renderIndexViewController } = require('./indexControllers');
const {
  loginUserController,
  logoutUserController,
  renderLoginController,
  renderRegisterController,
  registerNewUserController,
  renderUserProfileController,
} = require('./usersControllers');

module.exports = {
  loginUserController,
  logoutUserController,
  renderLoginController,
  renderRegisterController,
  renderIndexViewController,
  registerNewUserController,
  renderUserProfileController,
};
