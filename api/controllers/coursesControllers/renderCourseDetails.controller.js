const {
  findOneCourseService,
} = require('../../../database/services/modelServices/courseServices');
const {
  render500ErrorHelper,
  redirectNonExistentDataHelper,
  checkCurrentUserRelationToCourseHelper,
} = require('../helpers');

exports.renderCourseDetailsController = async (req, res) => {
  const { local, _id: currentUserId } = req.user;
  const { id } = req.params;

  const isCourse = await findOneCourseService(id);

  if (isCourse instanceof Error) {
    render500ErrorHelper(res);
    return;
  }

  if (isCourse === null) {
    redirectNonExistentDataHelper(req, res);
    return;
  }

  const { students, instructors } = isCourse;

  const {
    isCurrentUserInStudentList,
    isCurrentUserTheCourseInstructor,
  } = checkCurrentUserRelationToCourseHelper(
    instructors,
    currentUserId,
    students
  );

  res.status(200).render('users/common/course-details', {
    local,
    isCourse,
    isCurrentUserInStudentList,
    isCurrentUserTheCourseInstructor,
  });
};
