const { fakeUserData } = require('../../../models/fixtures');
const { createNewUserInstanceService } = require('../index');
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
  test('should validate new user instance created', async () => {
    expect.assertions(5);

    const newUserInstance = await createNewUserInstanceService(fakeUserData);

    validateNotEmpty(newUserInstance);
    validateObjectMatch(newUserInstance, fakeUserData);
  });

  test('should validate new user ins', async () => {
    try {
      await createNewUserInstanceService();
    } catch (error) {
      expect(error).toMatch(/Error when creating new User/i);
    }
  });
});
