const { Router } = require('express');
const { isLoggedInUser, isInstructor } = require('../middleware');
const {
  myCoursesLessonEditPrefix,
  myCoursesLessonDetailsPrefix,
  myCoursesTeachNewLessonPrefix,
  myCoursesTeachAllLessonsPrefix,
} = require('../../configs');
const {
  createNewLessonController,
  renderEditLessonController,
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
router.get(
  myCoursesLessonEditPrefix,
  isLoggedInUser,
  renderEditLessonController
);

module.exports = router;
