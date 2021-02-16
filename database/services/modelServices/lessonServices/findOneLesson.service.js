const Lesson = require('../../../models/lesson.model');
const {
  handleAsyncFunction,
} = require('../../../../utils/global-utils/handleAsyncFunction.utils');

exports.findOneLessonService = async (lessonId) => {
  const [lessonFound, lessonError] = await handleAsyncFunction(
    Lesson.findById(lessonId)
  );

  return lessonFound || lessonError;
};
