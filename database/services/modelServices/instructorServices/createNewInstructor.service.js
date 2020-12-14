const Instructor = require('../../../models/instructor.model');
const { createNewUserByModelHelper } = require('../../helpers');

exports.createNewInstructorService = async (requestBody) => {
  const isNewInstructor = await createNewUserByModelHelper(
    Instructor,
    requestBody
  );

  return isNewInstructor;
};
