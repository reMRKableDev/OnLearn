const { Router } = require('express');
const { profilePrefix } = require('../../configs');
const { renderUserProfileController } = require('../controllers');

const router = Router();

router.get(profilePrefix, renderUserProfileController);

module.exports = router;
