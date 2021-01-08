const Course = require('../../../models/course.model');
const {
  handleAsyncFunction,
} = require('../../../../utils/global-utils/handleAsyncFunction.utils');

exports.findOneCourseService = async (courseId) => {
  const [foundResults, foundError] = await handleAsyncFunction(
    Course.findById(courseId)
  );

  return foundResults || foundError;
};
