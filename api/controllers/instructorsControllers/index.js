const {
  renderBeInstructorController,
} = require('./renderBeInstructor.controller');
const {
  changeRoleToInstructor,
} = require('./changeRoleToInstructor.controller');
const {
  renderCreateNewCourseController,
} = require('./renderCreateNewCourse.controller');

module.exports = {
  changeRoleToInstructor,
  renderBeInstructorController,
  renderCreateNewCourseController,
};
