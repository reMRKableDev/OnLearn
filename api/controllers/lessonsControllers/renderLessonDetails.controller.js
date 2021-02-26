const {
  findOneLessonService,
} = require('../../../database/services/modelServices/lessonServices');
const {
  render500ErrorHelper,
  redirectNonExistentDataHelper,
} = require('../helpers');

exports.renderLessonDetailsController = async (req, res) => {
  const { id } = req.params;
  const { local } = req.user;

  const isLesson = await findOneLessonService(id);

  if (isLesson instanceof Error) {
    render500ErrorHelper(res);
    return;
  }

  if (isLesson === null) {
    redirectNonExistentDataHelper(req, res);
    return;
  }

  res.status(200).render('users/common/lesson-details', { local, isLesson });
};
