const Course = require('../../../models/course.model');
const {
  handleAsyncFunction,
} = require('../../../../utils/global-utils/handleAsyncFunction.utils');

exports.updateCourseService = async (id, title, description) => {
  const [updateResults, updateError] = await handleAsyncFunction(
    Course.findByIdAndUpdate(
      id,
      {
        title,
        description,
      },
      { upsert: true, new: true }
    )
  );

  return updateResults || updateError;
};
