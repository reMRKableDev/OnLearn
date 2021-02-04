const { createNewLessonController } = require('./createNewLesson.controller');
const { allLessonsTaughtController } = require('./allLessonsTaught.controller');
const {
  renderCreateNewLessonController,
} = require('./renderCreateNewLesson.controller');

module.exports = {
  createNewLessonController,
  allLessonsTaughtController,
  renderCreateNewLessonController,
};
