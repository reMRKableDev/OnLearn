const { Router } = require('express');
const { isLoggedInUser, isInstructor } = require('../middleware');
const {
  myCoursesTeachNewLessonPrefix,
  myCoursesTeachAllLessonsPrefix,
} = require('../../configs');
const {
  allLessonsTaughtController,
  renderCreateNewLessonController,
} = require('../controllers');

const router = Router();

router.get(
  myCoursesTeachAllLessonsPrefix,
  isLoggedInUser,
  isInstructor,
  allLessonsTaughtController
);
router.get(
  myCoursesTeachNewLessonPrefix,
  isLoggedInUser,
  isInstructor,
  renderCreateNewLessonController
);

module.exports = router;
