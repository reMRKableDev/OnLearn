const { Router } = require('express');
const { registerPrefix, loginPrefix } = require('../../configs');
const {
  validateLoginForm,
  validateRegistrationForm,
} = require('../middleware');
const {
  loginUserController,
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

module.exports = router;
