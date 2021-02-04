const Lesson = require('../../../models/lesson.model');
const {
  handleAsyncFunction,
} = require('../../../../utils/global-utils/handleAsyncFunction.utils');

exports.findAllLessonsService = async () => {
  const [foundResults, foundError] = await handleAsyncFunction(Lesson.find({}));

  return foundResults || foundError;
};
