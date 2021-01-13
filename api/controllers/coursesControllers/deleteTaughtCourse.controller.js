const {
  deleteCourseService,
} = require('../../../database/services/modelServices/courseServices');
const { render500ErrorHelper } = require('../helpers');

exports.deleteTaughtCourseController = async (req, res) => {
  const { id } = req.params;

  const isDeletedCourse = await deleteCourseService(id);

  if (isDeletedCourse instanceof Error) {
    render500ErrorHelper(res);
    return;
  }

  req.flash('success_msg', 'Course successfully deleted!');
  res.redirect('/my-courses');
};
