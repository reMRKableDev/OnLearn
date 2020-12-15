const { renderRegisterController } = require('./renderRegister.controller');
const { createNewUserController } = require('./createNewUser.controller');
const {
  renderUserProfileController,
} = require('./renderUserProfile.controller');

module.exports = {
  createNewUserController,
  renderRegisterController,
  renderUserProfileController,
};
