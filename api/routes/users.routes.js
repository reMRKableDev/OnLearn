const { Router } = require('express');
const { profilePrefix, profileEditPrefix } = require('../../configs');
const {
  renderUserProfileController,
  renderEditUserProfileController,
} = require('../controllers');
const { isLoggedInUser } = require('../middleware');

const router = Router();

router.get(profilePrefix, isLoggedInUser, renderUserProfileController);
router.get(profileEditPrefix, isLoggedInUser, renderEditUserProfileController);
/* router.post(editProfilePrefix, isLoggedInUser, renderEditUserProfileController);
 */
module.exports = router;
