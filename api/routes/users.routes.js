const { Router } = require('express');
const { registerPrefix } = require('../../configs');
const { validateRegistrationForm } = require('../middleware');
const {
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

module.exports = router;
