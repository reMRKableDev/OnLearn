const { Router } = require('express');
const { isInstructor, isLoggedInUser } = require('../middleware');
const { myCoursesPrefix, myCoursesTeachPrefix } = require('../../configs');
const {
  renderMyCoursesController,
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

module.exports = router;
