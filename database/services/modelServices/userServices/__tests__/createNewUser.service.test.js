const { fakeUserData } = require('../../../../fixtures');
const { createNewUserService } = require('../index');
const {
  dbConnect,
  dbDisconnect,
} = require('../../../../../utils/test-utils/dbHandler.utils');
const {
  validateNotEmpty,
  validateInstanceOf,
  validateStringEquality,
} = require('../../../../../utils/test-utils/validators.utils');

describe('Create New User Test Suite', () => {
  beforeEach(async () => dbConnect());
  afterEach(async () => dbDisconnect());

  test('should validate an Error for incorrect id format', async () => {
    const results = await createNewUserService({ role: 123 });

    validateInstanceOf(results, Error);
  });

  test('should validate new user created from incoming data', async () => {
    const newUser = await createNewUserService(fakeUserData);

    validateNotEmpty(newUser);

    const { role, local } = newUser;

    validateNotEmpty(role);
    validateStringEquality(role, fakeUserData.role);

    const { email, firstName, lastName, password, username } = local;

    validateNotEmpty(email);
    validateStringEquality(email, fakeUserData.email);

    validateNotEmpty(firstName);
    validateStringEquality(firstName, fakeUserData.firstName);

    validateNotEmpty(lastName);
    validateStringEquality(lastName, fakeUserData.lastName);

    validateNotEmpty(password);
    validateStringEquality(password, expect.anything());

    validateNotEmpty(username);
    validateStringEquality(username, fakeUserData.username);
  });
});
