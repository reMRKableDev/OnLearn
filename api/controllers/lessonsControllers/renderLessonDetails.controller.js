const {
  findOneLessonService,
} = require('../../../database/services/modelServices/lessonServices');
const {
  render500ErrorHelper,
  redirectNonexistentCourseHelper,
} = require('../helpers');

exports.renderLessonDetailsController = async (req, res) => {
  const { id } = req.params;
  const { local } = req.user;

  const isLesson = await findOneLessonService(id);

  if (isLesson instanceof Error) {
    render500ErrorHelper(res);
    return;
  }

  // TODO: refactor redirectNonexistent... to take care of both lessons and courses.
  if (isLesson === null) {
    redirectNonexistentCourseHelper(req, res);
    return;
  }

  res.status(200).render('users/common/lesson-details', { local, isLesson });
};
