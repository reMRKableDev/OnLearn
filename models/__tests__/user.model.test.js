const { dbConnect, dbDisconnect } = require('../../utils/dbHandler.utils');
const User = require('../user.model');
const {
  validateNotEmpty,
  validateObjectMatch,
  validateMongoValidatorError,
  validateMongoDuplicationError,
} = require('../../utils/validators.utils');

beforeAll(async () => dbConnect());
afterAll(async () => dbDisconnect());

describe('User Model Test Suite', () => {
  const fakeStudentData = {
    username: 'studentUser',
    email: 'student@student.com',
    password: 'student123',
    role: 'student',
  };

  test('should validate saving a new student user successfully', async () => {
    const validStudentUser = new User(fakeStudentData);
    const savedStudentUser = await validStudentUser.save();

    validateNotEmpty(savedStudentUser);
    validateObjectMatch(savedStudentUser, fakeStudentData);
  });

  test('should validate MongoError duplicate error with code 11000', async () => {
    expect.assertions(4);
    const validStudentUser = new User(fakeStudentData);

    try {
      await validStudentUser.save();
    } catch (error) {
      const { name, code } = error;
      validateMongoDuplicationError(name, code);
    }
  });

  test('should validate Validator Error for empty fields', async () => {
    const fakeStudentDataEmptyFields = {
      username: '',
      email: '',
      password: '',
      role: 'student',
    };

    const validStudentUser = new User(fakeStudentDataEmptyFields);

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
