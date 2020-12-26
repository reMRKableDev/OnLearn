const { Router } = require('express');
const { isLoggedInUser } = require('../middleware');
const { profilePrefix, profileEditPrefix } = require('../../configs');
const {
  updateUserProfile,
  renderUserProfileController,
  renderEditUserProfileController,
} = require('../controllers');
const { uploader } = require('../../cloudinary/cloudinary.uploader');

const router = Router();

router.get(profilePrefix, isLoggedInUser, renderUserProfileController);
router.get(profileEditPrefix, isLoggedInUser, renderEditUserProfileController);
router.post(profileEditPrefix, uploader.single('image'), updateUserProfile);

module.exports = router;
