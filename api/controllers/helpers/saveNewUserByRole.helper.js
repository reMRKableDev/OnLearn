const { saveNewStudentUserHelper } = require('./saveNewStudentUser.helper');
const {
  saveNewInstructorUserHelper,
} = require('./saveNewInstructorUser.helper');

async function newUserByRole(role, requestBody) {
  return role.match(/student/i)
    ? saveNewStudentUserHelper(requestBody)
    : saveNewInstructorUserHelper(requestBody);
}

exports.saveNewUserByRoleHelper = async (requestBody) => {
  const { role } = requestBody;

  const newTest = await newUserByRole(role, requestBody);

  return newTest;
};
