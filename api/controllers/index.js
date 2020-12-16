const { renderIndexViewController } = require('./indexControllers');
const {
  loginUserController,
  renderLoginController,
  renderRegisterController,
  registerNewUserController,
  renderUserProfileController,
} = require('./usersControllers');

module.exports = {
  loginUserController,
  renderLoginController,
  renderRegisterController,
  renderIndexViewController,
  registerNewUserController,
  renderUserProfileController,
};
