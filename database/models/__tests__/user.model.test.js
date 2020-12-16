const User = require('../user.model');
const { fakeUserData, fakeUserDataEmptyFields } = require('../../fixtures');
const {
  validateNotEmpty,
  validateStringEquality,
  validateMongoValidatorError,
  validateMongoDuplicationError,
} = require('../../../utils/test-utils/validators.utils');
const {
  dbConnect,
  dbDisconnect,
} = require('../../../utils/test-utils/dbHandler.utils');

beforeAll(async () => dbConnect());
afterAll(async () => dbDisconnect());

describe('User Model Test Suite', () => {
  test('should validate saving a new student user successfully', async () => {
    const validStudentUser = new User({
      local: fakeUserData,
      role: fakeUserData.role,
    });
    const savedStudentUser = await validStudentUser.save();

    validateNotEmpty(savedStudentUser);
    validateStringEquality(savedStudentUser.role, fakeUserData.role);
    validateStringEquality(savedStudentUser.local.email, fakeUserData.email);
    validateStringEquality(
      savedStudentUser.local.username,
      fakeUserData.username
    );
    validateStringEquality(
      savedStudentUser.local.password,
      fakeUserData.password
    );
    validateStringEquality(
      savedStudentUser.local.firstName,
      fakeUserData.firstName
    );
    validateStringEquality(
      savedStudentUser.local.lastName,
      fakeUserData.lastName
    );
  });

  test('should validate MongoError duplicate error with code 11000', async () => {
    expect.assertions(4);
    const validStudentUser = new User({
      local: fakeUserData,
      role: fakeUserData.role,
    });

    try {
      await validStudentUser.save();
    } catch (error) {
      const { name, code } = error;
      validateMongoDuplicationError(name, code);
    }
  });

  test('should validate Validator Error for empty fields', async () => {
    const validStudentUser = new User({
      local: fakeUserDataEmptyFields,
      role: fakeUserDataEmptyFields.role,
    });

    try {
      await validStudentUser.save();
    } catch (error) {
      const {
        'local.username': username,
        'local.email': email,
        'local.password': password,
        'local.firstName': firstName,
        'local.lastName': lastName,
      } = error.errors;

      const { name, message } = username;
      validateMongoValidatorError(name, message);

      const { name: emailName, message: emailMessage } = email;
      validateMongoValidatorError(emailName, emailMessage);

      const { name: passwordName, message: passwordMessage } = password;
      validateMongoValidatorError(passwordName, passwordMessage);

      const { name: firstNameValue, message: firstNameMessage } = firstName;
      validateMongoValidatorError(firstNameValue, firstNameMessage);

      const { name: lastNameValue, message: lastNameMessage } = lastName;
      validateMongoValidatorError(lastNameValue, lastNameMessage);
    }
  });
});
