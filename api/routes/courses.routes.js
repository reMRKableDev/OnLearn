const { Router } = require('express');
const { isInstructor, isLoggedInUser } = require('../middleware');
const {
  myCoursesPrefix,
  myCoursesTeachPrefix,
  myCoursesTeachStudentListPrefix,
} = require('../../configs');
const {
  renderMyCoursesController,
  renderStudentListController,
  renderTaughtCourseController,
} = require('../controllers');

const router = Router();

router.get(myCoursesPrefix, isLoggedInUser, renderMyCoursesController);
router.get(
  myCoursesTeachPrefix,
  isLoggedInUser,
  isInstructor,
  renderTaughtCourseController
);
router.get(
  myCoursesTeachStudentListPrefix,
  isLoggedInUser,
  isInstructor,
  renderStudentListController
);

module.exports = router;
