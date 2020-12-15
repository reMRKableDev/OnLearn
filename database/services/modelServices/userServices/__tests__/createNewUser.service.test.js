const { fakeUserData } = require('../../../../fixtures');
const { createNewUserService } = require('../index');
const {
  dbConnect,
  dbDisconnect,
} = require('../../../../../utils/test-utils/dbHandler.utils');
const {
  validateNotEmpty,
  validateStringEquality,
} = require('../../../../../utils/test-utils/validators.utils');

beforeAll(async () => dbConnect());
afterAll(async () => dbDisconnect());

describe('Create New User Test Suite', () => {
  test('should validate new user created from incoming data', async () => {
    const newUser = await createNewUserService(fakeUserData);

    validateNotEmpty(newUser);

    const { role, email, firstName, lastName, password, username } = newUser;

    validateNotEmpty(role);
    validateStringEquality(role, fakeUserData.role);

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
