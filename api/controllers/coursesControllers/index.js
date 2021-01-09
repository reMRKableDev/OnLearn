const { renderMyCoursesController } = require('./renderMyCourses.controller');
const { renderAllCoursesController } = require('./renderAllCourses.controller');
const {
  renderCourseDetailsController,
} = require('./renderCourseDetails.controller');
const {
  renderTaughtCourseController,
} = require('./renderTaughtCourse.controller');
const {
  renderStudentListController,
} = require('./renderStudentList.controller');

module.exports = {
  renderMyCoursesController,
  renderAllCoursesController,
  renderStudentListController,
  renderTaughtCourseController,
  renderCourseDetailsController,
};
