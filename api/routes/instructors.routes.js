const { Router } = require('express');
const { instructorPrefix, newCoursePrefix } = require('../../configs');
const {
  changeRoleToInstructor,
  renderBeInstructorController,
  renderCreateNewCourseController,
} = require('../controllers');
const { isInstructor, isLoggedInUser } = require('../middleware');

const router = Router();

router.get(instructorPrefix, isLoggedInUser, renderBeInstructorController);
router.post(instructorPrefix, isLoggedInUser, changeRoleToInstructor);
router.get(
  newCoursePrefix,
  isLoggedInUser,
  isInstructor,
  renderCreateNewCourseController
);

module.exports = router;
