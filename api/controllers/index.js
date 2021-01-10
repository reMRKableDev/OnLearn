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
  renderBeInstructorController,
} = require('./instructorsControllers');
const {
  renderAddModuleController,
  createNewCourseController,
  renderMyCoursesController,
  renderAllCoursesController,
  renderStudentListController,
  renderTaughtCourseController,
  renderCourseDetailsController,
  renderCreateNewCourseController,
} = require('./coursesControllers');

module.exports = {
  loginUserController,
  logoutUserController,
  renderLoginController,
  changeRoleToInstructor,
  renderRegisterController,
  renderAddModuleController,
  renderIndexViewController,
  registerNewUserController,
  createNewCourseController,
  renderMyCoursesController,
  renderAllCoursesController,
  renderStudentListController,
  updateUserProfileController,
  renderUserProfileController,
  renderTaughtCourseController,
  renderBeInstructorController,
  renderCourseDetailsController,
  renderCreateNewCourseController,
  renderEditUserProfileController,
  authenticateGoogleLoginController,
  authenticateGoogleCallbackController,
};
