const { Router } = require('express');
const { isInstructor, isLoggedInUser } = require('../middleware');
const {
  newCoursePrefix,
  myCoursesPrefix,
  allCoursesPrefix,
  courseDetailsPrefix,
  myCoursesTeachPrefix,
  myCoursesTeachEditCourse,
  myCoursesTeachDeleteCourse,
  myCoursesTeachStudentListPrefix,
} = require('../../configs');
const {
  createNewCourseController,
  renderMyCoursesController,
  renderAllCoursesController,
  renderStudentListController,
  updateTaughtCourseController,
  deleteTaughtCourseController,
  renderTaughtCourseController,
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
  myCoursesTeachEditCourse,
  isLoggedInUser,
  isInstructor,
  renderEditTaughtCourseController
);
router.post(
  myCoursesTeachEditCourse,
  isLoggedInUser,
  updateTaughtCourseController
);
router.post(
  myCoursesTeachDeleteCourse,
  isLoggedInUser,
  deleteTaughtCourseController
);

module.exports = router;
