const {
  findOneCourseService,
} = require('../../../database/services/modelServices/courseServices');

const {
  render500ErrorHelper,
  redirectNonExistentDataHelper,
} = require('../helpers');

exports.renderTaughtCourseController = async (req, res) => {
  const { local } = req.user;
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

  res.status(200).render('users/instructors/course-taught', {
    local,
    isCourse,
  });
};
