const {
  findOneCourseService,
} = require('../../../database/services/modelServices/courseServices');

const {
  render500ErrorHelper,
  redirectNonexistentCourseHelper,
} = require('../helpers');

exports.renderStudentListController = async (req, res) => {
  const { local } = req.user;
  const { id } = req.params;

  const isCourse = await findOneCourseService(id);

  if (isCourse instanceof Error) {
    render500ErrorHelper(res);
    return;
  }

  if (isCourse === null) {
    redirectNonexistentCourseHelper(req, res);
    return;
  }

  res.status(200).render('users/instructors/student-list', { local, isCourse });
};
