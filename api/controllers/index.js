const { renderIndexViewController } = require('./indexControllers');
const {
  renderRegisterController,
  createNewUserController,
  renderUserProfileController,
} = require('./usersControllers');

module.exports = {
  renderIndexViewController,
  renderRegisterController,
  createNewUserController,
  renderUserProfileController,
};
