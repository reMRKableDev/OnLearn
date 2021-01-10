const { createNewCourseController } = require('./createNewCourse.controller');
const { renderMyCoursesController } = require('./renderMyCourses.controller');
const { renderAllCoursesController } = require('./renderAllCourses.controller');
const { renderAddModuleController } = require('./renderAddModule.controller');
const {
  renderCourseDetailsController,
} = require('./renderCourseDetails.controller');
const {
  renderTaughtCourseController,
} = require('./renderTaughtCourse.controller');
const {
  renderStudentListController,
} = require('./renderStudentList.controller');
const {
  renderCreateNewCourseController,
} = require('./renderCreateNewCourse.controller');

module.exports = {
  renderAddModuleController,
  createNewCourseController,
  renderMyCoursesController,
  renderAllCoursesController,
  renderStudentListController,
  renderTaughtCourseController,
  renderCourseDetailsController,
  renderCreateNewCourseController,
};
