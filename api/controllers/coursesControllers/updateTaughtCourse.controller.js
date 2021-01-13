const {
  updateCourseService,
} = require('../../../database/services/modelServices/courseServices');
const {
  render500ErrorHelper,
  redirectNonexistentCourseHelper,
} = require('../helpers');

exports.updateTaughtCourseController = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  const isUpdatedCourse = await updateCourseService(id, title, description);

  if (isUpdatedCourse instanceof Error) {
    render500ErrorHelper(res);
    return;
  }

  if (isUpdatedCourse === null) {
    redirectNonexistentCourseHelper(req, res);
    return;
  }

  req.flash('success_msg', 'Course successfully updated!');
  res.redirect(`/my-courses/teach/${id}`);
};
