const Lesson = require('../../../models/lesson.model');
const {
  handleAsyncFunction,
} = require('../../../../utils/global-utils/handleAsyncFunction.utils');

exports.createNewLessonService = async (topic, content, videoUrl) => {
  const [lessonResults, lessonError] = await handleAsyncFunction(
    Lesson.create({ topic, content, videoUrl })
  );

  return lessonResults || lessonError;
};
