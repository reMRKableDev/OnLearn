const { createNewCourseController } = require('./createNewCourse.controller');
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
const {
  renderCreateNewCourseController,
} = require('./renderCreateNewCourse.controller');
const {
  renderEditTaughtCourseController,
} = require('./renderEditTaughtCourse.controller');
const {
  updateTaughtCourseController,
} = require('./updateTaughtCourse.controller');
const {
  deleteTaughtCourseController,
} = require('./deleteTaughtCourse.controller');

module.exports = {
  createNewCourseController,
  renderMyCoursesController,
  renderAllCoursesController,
  renderStudentListController,
  deleteTaughtCourseController,
  updateTaughtCourseController,
  renderTaughtCourseController,
  renderCourseDetailsController,
  renderCreateNewCourseController,
  renderEditTaughtCourseController,
};
