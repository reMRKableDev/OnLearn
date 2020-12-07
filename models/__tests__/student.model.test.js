const Student = require('../student.model');
const { fakeUserDataNoClasses } = require('../fixtures');
const { validateNotEmpty } = require('../../utils/validators.utils');
const { dbConnect, dbDisconnect } = require('../../utils/dbHandler.utils');

beforeAll(async () => dbConnect());
afterAll(async () => dbDisconnect());

describe('Student Model Test Suite', () => {
  test('should validate saving a new student user successfully', async () => {
    const validStudentUser = new Student(fakeUserDataNoClasses);
    const savedStudentUser = await validStudentUser.save();

    validateNotEmpty(savedStudentUser);
  });
});
