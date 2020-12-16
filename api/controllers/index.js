const { renderIndexViewController } = require('./indexControllers');
const {
  renderLoginController,
  renderRegisterController,
  createNewUserController,
  renderUserProfileController,
} = require('./usersControllers');

module.exports = {
  renderLoginController,
  renderIndexViewController,
  renderRegisterController,
  createNewUserController,
  renderUserProfileController,
};
