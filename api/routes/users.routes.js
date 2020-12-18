const { Router } = require('express');
const { profilePrefix } = require('../../configs');
const { renderUserProfileController } = require('../controllers');
const { isLoggedInUser } = require('../middleware');

const router = Router();

router.get(profilePrefix, isLoggedInUser, renderUserProfileController);

module.exports = router;
