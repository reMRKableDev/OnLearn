const { Router } = require('express');
const { registerPrefix, loginPrefix, logoutPrefix } = require('../../configs');
const { validateRegistrationForm } = require('../middleware');
const {
  loginUserController,
  logoutUserController,
  renderLoginController,
  registerNewUserController,
  renderRegisterController,
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

module.exports = router;
