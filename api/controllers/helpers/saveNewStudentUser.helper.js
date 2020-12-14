const {
  createNewStudentService,
} = require('../../../database/services/modelServices/studentServices');

exports.saveNewStudentUserHelper = async (requestBody) => {
  const newStudent = await createNewStudentService(requestBody);

  return newStudent;
};
