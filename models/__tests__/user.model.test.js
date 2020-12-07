const User = require('../user.model');
const { fakeUserData, fakeUserDataEmptyFields } = require('../fixtures');
const {
  validateNotEmpty,
  validateObjectMatch,
  validateMongoValidatorError,
  validateMongoDuplicationError,
} = require('../../utils/validators.utils');
const { dbConnect, dbDisconnect } = require('../../utils/dbHandler.utils');

beforeAll(async () => dbConnect());
afterAll(async () => dbDisconnect());

describe('User Model Test Suite', () => {
  test('should validate saving a new student user successfully', async () => {
    const validStudentUser = new User(fakeUserData);
    const savedStudentUser = await validStudentUser.save();

    validateNotEmpty(savedStudentUser);
    validateObjectMatch(savedStudentUser, fakeUserData);
  });

  test('should validate MongoError duplicate error with code 11000', async () => {
    expect.assertions(4);
    const validStudentUser = new User(fakeUserData);

    try {
      await validStudentUser.save();
    } catch (error) {
      const { name, code } = error;
      validateMongoDuplicationError(name, code);
    }
  });

  test('should validate Validator Error for empty fields', async () => {
    const validStudentUser = new User(fakeUserDataEmptyFields);

    try {
      await validStudentUser.save();
    } catch (error) {
      const { username, email, password } = error.errors;

      const { name, message } = username;
      validateMongoValidatorError(name, message);

      const { name: emailName, message: emailMessage } = email;
      validateMongoValidatorError(emailName, emailMessage);

      const { name: passwordName, message: passwordMessage } = password;
      validateMongoValidatorError(passwordName, passwordMessage);
    }
  });
});
