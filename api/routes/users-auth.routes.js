const { Router } = require('express');
const { registerPrefix, loginPrefix } = require('../../configs');
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
router.get(loginPrefix, (req, res) => res.render('users/login'));

module.exports = router;
