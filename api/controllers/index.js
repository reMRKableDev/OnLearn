const { renderIndexViewController } = require('./indexControllers');
const {
  renderLoginController,
  renderRegisterController,
  registerNewUserController,
  renderUserProfileController,
} = require('./usersControllers');

module.exports = {
  renderLoginController,
  renderIndexViewController,
  renderRegisterController,
  registerNewUserController,
  renderUserProfileController,
};
