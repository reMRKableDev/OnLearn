const { renderRegisterController } = require('./renderRegister.controller');
const { renderLoginController } = require('./renderLogin.controller');
const { logoutUserController } = require('./logoutUser.controller');
const { registerNewUserController } = require('./registerNewUser.controller');
const {
  renderUserProfileController,
} = require('./renderUserProfile.controller');
const { loginUserController } = require('./loginUser.controller');

module.exports = {
  loginUserController,
  logoutUserController,
  renderLoginController,
  renderRegisterController,
  registerNewUserController,
  renderUserProfileController,
};
