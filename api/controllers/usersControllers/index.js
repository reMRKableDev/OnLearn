const { renderRegisterController } = require('./renderRegister.controller');
const { renderLoginController } = require('./renderLogin.controller');
const { registerNewUserController } = require('./registerNewUser.controller');
const {
  renderUserProfileController,
} = require('./renderUserProfile.controller');

module.exports = {
  renderLoginController,
  registerNewUserController,
  renderRegisterController,
  renderUserProfileController,
};
