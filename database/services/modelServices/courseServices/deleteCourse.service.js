const Course = require('../../../models/course.model');
const {
  handleAsyncFunction,
} = require('../../../../utils/global-utils/handleAsyncFunction.utils');

exports.deleteCourseService = async (courseId) => {
  const [results, error] = await handleAsyncFunction(
    Course.findByIdAndDelete(courseId)
  );

  return results || error;
};
