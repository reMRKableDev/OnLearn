const {
  findOneCourseService,
} = require('../../../database/services/modelServices/courseServices');

const { render500ErrorHelper } = require('../helpers');

exports.renderTaughtCourseController = async (req, res) => {
  const { local } = req.user;
  const { id } = req.params;

  const isCourse = await findOneCourseService(id);

  if (isCourse instanceof Error) {
    render500ErrorHelper(res);
    return;
  }

  if (isCourse === null) {
    req.flash('error_msg', "Course doesn't exist!");
    res.redirect(302, '/');
    return;
  }

  console.log(isCourse);

  res.status(200).render('users/instructors/courses-taught', {
    local,
    isCourse,
  });
};
