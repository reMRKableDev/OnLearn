const {
  createNewInstructorService,
} = require('../../../database/services/modelServices/instructorServices');

exports.saveNewInstructorUserHelper = async (requestBody) => {
  const newInstructor = await createNewInstructorService(requestBody);

  return newInstructor;
};
