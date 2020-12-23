const { updateUserRoleService, createNewUserService } = require('../index');
const { fakeUserData, fakeIdFormatData } = require('../../../../fixtures');
const {
  dbConnect,
  dbDisconnect,
} = require('../../../../../utils/test-utils/dbHandler.utils');
const {
  validateNotEmpty,
  validateInstanceOf,
  validateStringEquality,
} = require('../../../../../utils/test-utils/validators.utils');

let validUser;

describe('updateUserRole Service Test Suite', () => {
  beforeEach(async () => {
    await dbConnect();

    fakeUserData.role = 'student';

    validUser = await createNewUserService({
      local: fakeUserData,
      role: fakeUserData.role,
    });
  });

  afterEach(async () => dbDisconnect());

  test('should validate an Error for incorrect id format', async () => {
    const { incorrectFormat } = fakeIdFormatData;

    const results = await updateUserRoleService(incorrectFormat);

    validateInstanceOf(results, Error);
  });

  test('should validate updating role from student to instructor successfully', async () => {
    validateNotEmpty(validUser);
    validateStringEquality(validUser.role, 'student');

    const { _id } = validUser;
    const updatedUserResults = await updateUserRoleService(_id);

    validateNotEmpty(updatedUserResults);
    validateStringEquality(updatedUserResults.role, 'instructor');
  });
});
