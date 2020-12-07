const { dbConnect, dbDisconnect } = require('../../utils/dbHandler.utils');
const Instructor = require('../instructor.model');
const { validateNotEmpty } = require('../../utils/validators.utils');

beforeAll(async () => dbConnect());
afterAll(async () => dbDisconnect());

describe('Instructor Model Test Suite', () => {
  const fakeInstructorDataNoClasses = {
    firstName: 'Dummy',
    lastName: 'User',
    username: 'dummyUser',
    email: 'dummy@user.com',
    classes: [],
  };

  test('should validate saving a new instructor user successfully', async () => {
    const validInstructorUser = new Instructor(fakeInstructorDataNoClasses);
    const savedInstructorUser = await validInstructorUser.save();

    validateNotEmpty(savedInstructorUser);
  });
});
