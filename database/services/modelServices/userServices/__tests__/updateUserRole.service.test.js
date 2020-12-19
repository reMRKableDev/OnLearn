const { updateUserRoleService, createNewUserService } = require('../index');
const { fakeUserData } = require('../../../../fixtures');
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

describe('updateUserRole Service Test Suite', () => {
  test('should validate updating role from student to instructor successfully', async () => {
    fakeUserData.role = 'student';
    const newUser = await createNewUserService(fakeUserData);

    validateNotEmpty(newUser);
    validateStringEquality(newUser.role, 'student');

    const { _id } = newUser;
    const updatedUserResults = await updateUserRoleService(_id);

    validateNotEmpty(updatedUserResults);
    validateStringEquality(updatedUserResults.role, 'instructor');
  });
});
