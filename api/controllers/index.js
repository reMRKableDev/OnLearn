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
  renderLearnedCourseController,
  renderCourseDetailsController,
  renderCreateNewCourseController,
  renderEditTaughtCourseController,
} = require('./coursesControllers');
const {
  createNewLessonController,
  renderCreateNewLessonController,
} = require('./lessonsControllers');

module.exports = {
  loginUserController,
  logoutUserController,
  renderLoginController,
  changeRoleToInstructor,
  renderRegisterController,
  renderIndexViewController,
  registerNewUserController,
  createNewCourseController,
  createNewLessonController,
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
  renderLearnedCourseController,
  renderCourseDetailsController,
  renderCreateNewCourseController,
  renderCreateNewLessonController,
  renderEditUserProfileController,
  renderEditTaughtCourseController,
  authenticateGoogleLoginController,
  authenticateGoogleCallbackController,
};
