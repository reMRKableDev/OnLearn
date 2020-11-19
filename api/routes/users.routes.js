const { Router } = require('express');
const { registerPrefix } = require('../../configs');
const { validateRegistrationForm } = require('../middleware');
const { renderRegisterController } = require('../controllers');

const router = Router();

router.get(registerPrefix, renderRegisterController);
router.post(registerPrefix, validateRegistrationForm(), (req, res) => {
  res.send('You just posted');
});

module.exports = router;
