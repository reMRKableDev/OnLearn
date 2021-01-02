const User = require('../../../../models/user.model');
const { findUserByIdService } = require('../index');
const { fakeIdFormatData, fakeUserData } = require('../../../../fixtures');
const {
  dbConnect,
  dbDisconnect,
} = require('../../../../../utils/test-utils/dbHandler.utils');
const {
  validateNotEmpty,
  validateEquality,
  validateInstanceOf,
  validateStringEquality,
} = require('../../../../../utils/test-utils/validators.utils');

let validUser;

describe('findUserById Service Test Suite', () => {
  beforeEach(async () => {
    await dbConnect();
    validUser = await User.create({
      local: fakeUserData,
      role: fakeUserData.role,
    });
  });

  afterEach(async () => dbDisconnect());

  test('should validate null for non-existent user', async () => {
    const { correctFormat } = fakeIdFormatData;

    const results = await findUserByIdService(correctFormat);

    validateEquality(results, null);
  });

  test('should validate an Error for incorrect id format', async () => {
    const { incorrectFormat } = fakeIdFormatData;

    const results = await findUserByIdService(incorrectFormat);

    validateInstanceOf(results, Error);
  });

  test('should validate successfully finding id of an existing user', async () => {
    const { _id } = validUser;

    const results = await findUserByIdService(_id);

    validateNotEmpty(results);

    const { local, role } = results;
    validateStringEquality(role, fakeUserData.role);

    const { firstName, lastName, email, username, password } = local;
    validateStringEquality(firstName, fakeUserData.firstName);
    validateStringEquality(lastName, fakeUserData.lastName);
    validateStringEquality(email, fakeUserData.email);
    validateStringEquality(username, fakeUserData.username);
    validateStringEquality(password, fakeUserData.password);
  });
});
