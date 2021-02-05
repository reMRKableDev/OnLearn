const {
  createNewLessonService,
} = require('../../../database/services/modelServices/lessonServices');
const {
  findOneCourseService,
} = require('../../../database/services/modelServices/courseServices');
const { render500ErrorHelper } = require('../helpers');

exports.createNewLessonController = async (req, res) => {
  const { topic, content, videoUrl } = req.body;
  const { id } = req.params;

  const newLesson = await createNewLessonService(topic, content, videoUrl);

  if (newLesson instanceof Error) {
    render500ErrorHelper(res);
    return;
  }

  const isFoundCourse = await findOneCourseService(id);

  if (isFoundCourse instanceof Error) {
    render500ErrorHelper(res);
    return;
  }

  const { _id } = newLesson;

  isFoundCourse.lessons.push(_id);
  await isFoundCourse.save();

  res.redirect(`/my-courses/teach/${id}/all-lessons`);
};
