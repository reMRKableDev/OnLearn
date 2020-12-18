const { Router } = require('express');
const { profilePrefix, instructorPrefix } = require('../../configs');
const { renderUserProfileController } = require('../controllers');
const { isLoggedInUser } = require('../middleware');

const router = Router();

router.get(profilePrefix, isLoggedInUser, renderUserProfileController);
router.get(instructorPrefix, (req, res) =>
  res.status(200).render('users/instructor')
);

module.exports = router;
