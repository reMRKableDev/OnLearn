const { render500ErrorHelper } = require('../helpers');
const {
  findAllCoursesService,
} = require('../../../database/services/modelServices/courseServices');

exports.renderAllCoursesController = async (req, res) => {
  const { local } = req.user;

  const isAllCourses = await findAllCoursesService();

  if (isAllCourses instanceof Error) {
    render500ErrorHelper(res);
    return;
  }

  res.status(200).render('users/common/all-courses', { local, isAllCourses });
};
