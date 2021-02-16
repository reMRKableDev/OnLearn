const { Router } = require('express');
const { isLoggedInUser, isInstructor } = require('../middleware');
const {
  myCoursesLessonDetailsPrefix,
  myCoursesTeachNewLessonPrefix,
  myCoursesTeachAllLessonsPrefix,
} = require('../../configs');
const {
  createNewLessonController,
  renderLessonDetailsController,
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
router.get(
  myCoursesLessonDetailsPrefix,
  isLoggedInUser,
  renderLessonDetailsController
);

module.exports = router;
