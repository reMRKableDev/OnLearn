const { Router } = require('express');
const { isInstructor, isLoggedInUser } = require('../middleware');
const {
  myCoursesPrefix,
  allCoursesPrefix,
  courseDetailsPrefix,
  myCoursesTeachPrefix,
  myCoursesTeachStudentListPrefix,
} = require('../../configs');
const {
  renderMyCoursesController,
  renderAllCoursesController,
  renderStudentListController,
  renderTaughtCourseController,
  renderCourseDetailsController,
} = require('../controllers');

const router = Router();

router.get(courseDetailsPrefix, isLoggedInUser, renderCourseDetailsController);
router.get(allCoursesPrefix, isLoggedInUser, renderAllCoursesController);
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
