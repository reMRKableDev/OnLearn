const { Router } = require('express');
const { registerPrefix, loginPrefix } = require('../../configs');
const { validateRegistrationForm } = require('../middleware');
const {
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

module.exports = router;
