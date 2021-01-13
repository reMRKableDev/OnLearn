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
  createNewCourseController,
  renderMyCoursesController,
  registerToCourseController,
  renderAllCoursesController,
  renderStudentListController,
  updateTaughtCourseController,
  deleteTaughtCourseController,
  renderTaughtCourseController,
  renderCourseDetailsController,
  renderCreateNewCourseController,
  renderEditTaughtCourseController,
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
  renderAllCoursesController,
  registerToCourseController,
  renderStudentListController,
  updateUserProfileController,
  renderUserProfileController,
  deleteTaughtCourseController,
  updateTaughtCourseController,
  renderTaughtCourseController,
  renderBeInstructorController,
  renderCourseDetailsController,
  renderCreateNewCourseController,
  renderEditUserProfileController,
  renderEditTaughtCourseController,
  authenticateGoogleLoginController,
  authenticateGoogleCallbackController,
};
