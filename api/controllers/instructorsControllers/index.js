const {
  changeRoleToInstructor,
} = require('./changeRoleToInstructor.controller');
const { createNewCourseController } = require('./createNewCourse.controller');
const {
  renderBeInstructorController,
} = require('./renderBeInstructor.controller');
const {
  renderCreateNewCourseController,
} = require('./renderCreateNewCourse.controller');

module.exports = {
  changeRoleToInstructor,
  createNewCourseController,
  renderBeInstructorController,
  renderCreateNewCourseController,
};
