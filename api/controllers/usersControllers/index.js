const { renderRegisterController } = require('./renderRegister.controller');
const { renderLoginController } = require('./renderLogin.controller');
const { createNewUserController } = require('./createNewUser.controller');
const {
  renderUserProfileController,
} = require('./renderUserProfile.controller');

module.exports = {
  renderLoginController,
  createNewUserController,
  renderRegisterController,
  renderUserProfileController,
};
