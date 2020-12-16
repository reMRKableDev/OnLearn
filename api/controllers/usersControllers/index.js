const { renderRegisterController } = require('./renderRegister.controller');
const { renderLoginController } = require('./renderLogin.controller');
const { registerNewUserController } = require('./registerNewUser.controller');
const {
  renderUserProfileController,
} = require('./renderUserProfile.controller');
const { loginUserController } = require('./loginUser.controller');

module.exports = {
  loginUserController,
  renderLoginController,
  renderRegisterController,
  registerNewUserController,
  renderUserProfileController,
};
