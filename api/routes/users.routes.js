const { Router } = require('express');
const { isLoggedInUser } = require('../middleware');
const { profilePrefix, profileEditPrefix } = require('../../configs');
const {
  updateUserProfileController,
  renderUserProfileController,
  renderEditUserProfileController,
} = require('../controllers');
const fileUploader = require('../../configs/cloudinary');

const router = Router();

router.get(profilePrefix, isLoggedInUser, renderUserProfileController);
router.get(profileEditPrefix, isLoggedInUser, renderEditUserProfileController);
router.post(
  profileEditPrefix,
  fileUploader.single('image'),
  updateUserProfileController
);

module.exports = router;
