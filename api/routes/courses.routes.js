const { Router } = require('express');
const { isInstructor, isLoggedInUser } = require('../middleware');
const {
  newCoursePrefix,
  myCoursesPrefix,
  allCoursesPrefix,
  courseDetailsPrefix,
  myCoursesTeachPrefix,
  myCoursesTeachAddModulePrefix,
  myCoursesTeachStudentListPrefix,
} = require('../../configs');
const {
  createNewModuleController,
  renderAddModuleController,
  createNewCourseController,
  renderMyCoursesController,
  renderAllCoursesController,
  renderStudentListController,
  renderTaughtCourseController,
  renderCourseDetailsController,
  renderCreateNewCourseController,
} = require('../controllers');

const router = Router();

router.get(
  newCoursePrefix,
  isLoggedInUser,
  isInstructor,
  renderCreateNewCourseController
);
router.post(newCoursePrefix, isLoggedInUser, createNewCourseController);
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
