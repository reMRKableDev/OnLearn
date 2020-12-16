const { Router } = require('express');
const { registerPrefix, loginPrefix } = require('../../configs');
const { validateRegistrationForm } = require('../middleware');
const {
  renderLoginController,
  createNewUserController,
  renderRegisterController,
} = require('../controllers');

const router = Router();

router.get(registerPrefix, renderRegisterController);
router.post(
  registerPrefix,
  validateRegistrationForm(),
  createNewUserController
);
router.get(loginPrefix, renderLoginController);

module.exports = router;
