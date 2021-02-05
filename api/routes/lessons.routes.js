const { Router } = require('express');
const { isLoggedInUser, isInstructor } = require('../middleware');
const {
  myCoursesTeachNewLessonPrefix,
  myCoursesTeachAllLessonsPrefix,
} = require('../../configs');
const {
  createNewLessonController,
  renderCreateNewLessonController,
  renderAllLessonsTaughtController,
} = require('../controllers');

const router = Router();

router.get(
  myCoursesTeachAllLessonsPrefix,
  isLoggedInUser,
  isInstructor,
  renderAllLessonsTaughtController
);
router.get(
  myCoursesTeachNewLessonPrefix,
  isLoggedInUser,
  isInstructor,
  renderCreateNewLessonController
);

router.post(myCoursesTeachNewLessonPrefix, createNewLessonController);

module.exports = router;
