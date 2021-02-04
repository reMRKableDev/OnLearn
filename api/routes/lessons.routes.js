const { Router } = require('express');
const { isLoggedInUser, isInstructor } = require('../middleware');
const { myCoursesTeachNewLessonPrefix } = require('../../configs');
const { renderCreateNewLessonController } = require('../controllers');

const router = Router();

router.get(
  myCoursesTeachNewLessonPrefix,
  isLoggedInUser,
  isInstructor,
  renderCreateNewLessonController
);

module.exports = router;
