const Instructor = require('../instructor.model');
const { fakeInstructorDataNoClasses } = require('../fixtures');
const { validateNotEmpty } = require('../../utils/test-utils/validators.utils');
const {
  dbConnect,
  dbDisconnect,
} = require('../../utils/test-utils/dbHandler.utils');

beforeAll(async () => dbConnect());
afterAll(async () => dbDisconnect());

describe('Instructor Model Test Suite', () => {
  test('should validate saving a new instructor user successfully', async () => {
    const validInstructorUser = new Instructor(fakeInstructorDataNoClasses);
    const savedInstructorUser = await validInstructorUser.save();

    validateNotEmpty(savedInstructorUser);
  });
});
