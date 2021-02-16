const { createNewLessonController } = require('./createNewLesson.controller');
const {
  renderCreateNewLessonController,
} = require('./renderCreateNewLesson.controller');
const {
  renderLessonDetailsController,
} = require('./renderLessonDetails.controller');
const {
  renderAllLessonsTaughtController,
} = require('./renderAllLessonsTaught.controller');

module.exports = {
  createNewLessonController,
  renderLessonDetailsController,
  renderAllLessonsTaughtController,
  renderCreateNewLessonController,
};
