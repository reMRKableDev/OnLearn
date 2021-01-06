const { Router } = require('express');
const { instructorPrefix, newCoursePrefix } = require('../../configs');
const {
  changeRoleToInstructor,
  createNewCourseController,
  renderBeInstructorController,
  renderCreateNewCourseController,
} = require('../controllers');
const { isInstructor, isLoggedInUser } = require('../middleware');

const router = Router();

router.get(instructorPrefix, isLoggedInUser, renderBeInstructorController);
router.post(instructorPrefix, changeRoleToInstructor);
router.get(
  newCoursePrefix,
  isLoggedInUser,
  isInstructor,
  renderCreateNewCourseController
);
router.post(newCoursePrefix, isLoggedInUser, createNewCourseController);

module.exports = router;
