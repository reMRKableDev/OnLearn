const { fakeUserData } = require('../../../models/fixtures');
const { createNewUserService } = require('../index');
const {
  dbConnect,
  dbDisconnect,
} = require('../../../../utils/test-utils/dbHandler.utils');
const {
  validateNotEmpty,
  validateObjectMatch,
} = require('../../../../utils/test-utils/validators.utils');

beforeAll(async () => dbConnect());
afterAll(async () => dbDisconnect());

describe('Create New User Instance Test Suite', () => {
  test('should validate new user created from incoming data', async () => {
    expect.assertions(5);

    const newUser = await createNewUserService(fakeUserData);

    validateNotEmpty(newUser);
    validateObjectMatch(newUser, fakeUserData);
  });
});
