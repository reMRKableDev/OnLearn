const { Router } = require('express');
const { isInstructor, isLoggedInUser } = require('../middleware');
const {
  newCoursePrefix,
  myCoursesPrefix,
  allCoursesPrefix,
  courseDetailsPrefix,
  myCoursesTeachPrefix,
  courseRegistrationPrefix,
  myCoursesTeachEditCoursePrefix,
  myCoursesTeachDeleteCoursePrefix,
  myCoursesTeachStudentListPrefix,
} = require('../../configs');
const {
  createNewCourseController,
  renderMyCoursesController,
  renderAllCoursesController,
  renderStudentListController,
  renderTaughtCourseController,
  updateTaughtCourseController,
  deleteTaughtCourseController,
  renderCourseDetailsController,
  renderCreateNewCourseController,
  renderEditTaughtCourseController,
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
router.get(
  myCoursesTeachEditCoursePrefix,
  isLoggedInUser,
  isInstructor,
  renderEditTaughtCourseController
);
router.post(
  myCoursesTeachEditCoursePrefix,
  isLoggedInUser,
  updateTaughtCourseController
);
router.post(
  myCoursesTeachDeleteCoursePrefix,
  isLoggedInUser,
  deleteTaughtCourseController
);

module.exports = router;
