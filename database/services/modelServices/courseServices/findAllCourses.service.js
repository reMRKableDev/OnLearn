const Course = require('../../../models/course.model');
const {
  handleAsyncFunction,
} = require('../../../../utils/global-utils/handleAsyncFunction.utils');

exports.findAllCoursesService = async () => {
  const [foundResults, foundError] = await handleAsyncFunction(Course.find({}));

  return foundResults || foundError;
};
