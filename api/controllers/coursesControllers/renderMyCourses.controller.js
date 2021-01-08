const { filterCoursesHelper, render500ErrorHelper } = require('../helpers');
const {
  findAllCoursesService,
} = require('../../../database/services/modelServices/courseServices');

exports.renderMyCoursesController = async (req, res) => {
  const { _id, local, role } = req.user;

  const allCourses = await findAllCoursesService();

  if (allCourses instanceof Error) {
    render500ErrorHelper(res);
    return;
  }

  const { coursesTaught, coursesLearned } = filterCoursesHelper(
    allCourses,
    _id
  );

  const user = { role, coursesTaught, coursesLearned };

  res.status(200).render('users/common/my-courses', {
    user,
    local,
  });
};
