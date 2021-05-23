const {
  render500ErrorHelper,
  redirectNonExistentDataHelper,
} = require('../helpers');
const {
  findOneLessonService,
} = require('../../../database/services/modelServices/lessonServices');

exports.renderEditLessonController = async (req, res) => {
  const { local } = req.user;
  const { id } = req.params;

  const isLesson = await findOneLessonService(id);

  if (isLesson instanceof Error) {
    render500ErrorHelper(res);
    return;
  }

  if (isLesson == null) {
    redirectNonExistentDataHelper(req, res);
  }

  res.status(200).render('users/instructors/edit-lesson', { local, isLesson });
};
