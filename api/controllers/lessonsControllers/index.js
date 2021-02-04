const { createNewLessonController } = require('./createNewLesson.controller');
const {
  renderCreateNewLessonController,
} = require('./renderCreateNewLesson.controller');
const {
  renderAllLessonsTaughtController,
} = require('./renderAllLessonsTaught.controller');

module.exports = {
  createNewLessonController,
  renderAllLessonsTaughtController,
  renderCreateNewLessonController,
};
