const { renderIndexViewController } = require('./indexControllers');
const {
  loginUserController,
  logoutUserController,
  renderLoginController,
  renderRegisterController,
  registerNewUserController,
  authenticateGoogleLoginController,
  authenticateGoogleCallbackController,
} = require('./usersAuthControllers');
const {
  updateUserProfileController,
  renderUserProfileController,
  renderEditUserProfileController,
} = require('./usersControllers');
const {
  changeRoleToInstructor,
  createNewCourseController,
  renderBeInstructorController,
  renderCreateNewCourseController,
} = require('./instructorsControllers');
const {
  renderMyCoursesController,
  renderStudentListController,
  renderTaughtCourseController,
} = require('./coursesControllers');

module.exports = {
  loginUserController,
  logoutUserController,
  renderLoginController,
  changeRoleToInstructor,
  renderRegisterController,
  renderIndexViewController,
  registerNewUserController,
  createNewCourseController,
  renderMyCoursesController,
  renderStudentListController,
  updateUserProfileController,
  renderUserProfileController,
  renderTaughtCourseController,
  renderBeInstructorController,
  renderCreateNewCourseController,
  renderEditUserProfileController,
  authenticateGoogleLoginController,
  authenticateGoogleCallbackController,
};
