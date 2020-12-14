const Student = require('../../../models/student.model');
const { createNewUserByModelHelper } = require('../../helpers');

exports.createNewStudentService = async (requestBody) => {
  const isNewStudent = await createNewUserByModelHelper(Student, requestBody);

  return isNewStudent;
};
