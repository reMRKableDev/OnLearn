const { Router } = require('express');
const { isInstructor, isLoggedInUser } = require('../middleware');
const {
  profilePrefix,
  newCoursePrefix,
  profileEditPrefix,
} = require('../../configs');
const {
  updateUserProfileController,
  renderUserProfileController,
  renderCreateNewCourseController,
  renderEditUserProfileController,
} = require('../controllers');
const fileUploader = require('../../cloudinary');

const router = Router();

router.get(profilePrefix, isLoggedInUser, renderUserProfileController);
router.get(profileEditPrefix, isLoggedInUser, renderEditUserProfileController);
router.post(
  profileEditPrefix,
  fileUploader.single('image'),
  updateUserProfileController
);
router.get(
  newCoursePrefix,
  isLoggedInUser,
  isInstructor,
  renderCreateNewCourseController
);

module.exports = router;
