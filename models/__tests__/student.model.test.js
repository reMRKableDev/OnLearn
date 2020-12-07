const { dbConnect, dbDisconnect } = require('../../utils/dbHandler.utils');
const Student = require('../student.model');
const { validateNotEmpty } = require('../../utils/validators.utils');

beforeAll(async () => dbConnect());
afterAll(async () => dbDisconnect());

describe('Student Model Test Suite', () => {
  const fakeStudentDataNoClasses = {
    firstName: 'Dummy',
    lastName: 'User',
    username: 'dummyUser',
    email: 'dummy@user.com',
    classes: [],
  };

  test('should validate saving a new student user successfully', async () => {
    const validStudentUser = new Student(fakeStudentDataNoClasses);
    const savedStudentUser = await validStudentUser.save();

    validateNotEmpty(savedStudentUser);
  });
});
