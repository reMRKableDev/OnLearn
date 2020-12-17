const { Router } = require('express');
const { validateRegistrationForm } = require('../middleware');
const {
  registerPrefix,
  loginPrefix,
  logoutPrefix,
  googleAuthPrefix,
  googleAuthCallbackPrefix,
} = require('../../configs');
const {
  loginUserController,
  logoutUserController,
  renderLoginController,
  renderRegisterController,
  registerNewUserController,
  authenticateGoogleLoginController,
  authenticateGoogleCallbackController,
} = require('../controllers');

const router = Router();

router.get(registerPrefix, renderRegisterController);
router.post(
  registerPrefix,
  validateRegistrationForm(),
  registerNewUserController
);
router.get(loginPrefix, renderLoginController);
router.post(loginPrefix, loginUserController);
router.post(logoutPrefix, logoutUserController);
router.get(googleAuthPrefix, authenticateGoogleLoginController);
router.get(googleAuthCallbackPrefix, authenticateGoogleCallbackController);

module.exports = router;
