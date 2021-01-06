const Course = require('../../../models/course.model');
const {
  handleAsyncFunction,
} = require('../../../../utils/global-utils/handleAsyncFunction.utils');

exports.createNewCourseService = async (title, description) => {
  const [courseResults, courseError] = await handleAsyncFunction(
    Course.create({ title, description })
  );

  return courseResults || courseError;
};
