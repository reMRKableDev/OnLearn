const { loginUserController } = require('./loginUser.controller');
const { logoutUserController } = require('./logoutUser.controller');
const { renderLoginController } = require('./renderLogin.controller');
const { renderRegisterController } = require('./renderRegister.controller');
const { registerNewUserController } = require('./registerNewUser.controller');
const {
  authenticateGoogleLoginController,
} = require('./authenticateGoogleLogin.controller');
const {
  authenticateGoogleCallbackController,
} = require('./authenticateGoogleCallback.controller');

module.exports = {
  loginUserController,
  logoutUserController,
  renderLoginController,
  renderRegisterController,
  registerNewUserController,
  authenticateGoogleLoginController,
  authenticateGoogleCallbackController,
};
