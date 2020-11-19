const { Router } = require('express');

const { renderRegisterController } = require('../controllers');
const { registerPrefix } = require('../../configs');

const router = Router();

router.get(registerPrefix, renderRegisterController);

module.exports = router;
