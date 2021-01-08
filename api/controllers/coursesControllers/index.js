const { renderMyCoursesController } = require('./renderMyCourses.controller');
const {
  renderTaughtCourseController,
} = require('./renderTaughtCourse.controller');
const {
  renderStudentListController,
} = require('./renderStudentList.controller');

module.exports = {
  renderMyCoursesController,
  renderStudentListController,
  renderTaughtCourseController,
};
