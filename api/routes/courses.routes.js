const { Router } = require('express');
const { isInstructor, isLoggedInUser } = require('../middleware');
const {
  newCoursePrefix,
  myCoursesPrefix,
  allCoursesPrefix,
  courseDetailsPrefix,
  myCoursesTeachPrefix,
  myCoursesLearnPrefix,
  courseRegistrationPrefix,
  myCoursesTeachEditCoursePrefix,
  myCoursesTeachDeleteCoursePrefix,
  myCoursesTeachStudentListPrefix,
} = require('../../configs');
const {
  createNewCourseController,
  renderMyCoursesController,
  renderAllCoursesController,
  registerToCourseController,
  renderStudentListController,
  renderTaughtCourseController,
  updateTaughtCourseController,
  deleteTaughtCourseController,
  renderCourseDetailsController,
  renderLearnedCourseController,
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
router.post(
  courseRegistrationPrefix,
  isLoggedInUser,
  registerToCourseController
);
router.get(allCoursesPrefix, isLoggedInUser, renderAllCoursesController);
router.get(myCoursesPrefix, isLoggedInUser, renderMyCoursesController);
router.get(myCoursesLearnPrefix, isLoggedInUser, renderLearnedCourseController);
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
