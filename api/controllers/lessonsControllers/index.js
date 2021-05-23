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
const { renderEditLessonController } = require('./renderEditLesson.controller');

module.exports = {
  createNewLessonController,
  renderEditLessonController,
  renderLessonDetailsController,
  renderAllLessonsTaughtController,
  renderCreateNewLessonController,
};
