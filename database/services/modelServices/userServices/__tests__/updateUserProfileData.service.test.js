const {
  updateUserProfileDataService,
  createNewUserService,
} = require('../index');
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

describe('updateUserProfileData Service Test Suite', () => {
  beforeEach(async () => {
    await dbConnect();

    validUser = await createNewUserService(fakeUserData);
  });

  afterEach(async () => dbDisconnect());

  test('should validate an Error for incorrect id format', async () => {
    const { incorrectFormat: dummyId } = fakeIdFormatData;
    const dummyReqBody = jest.fn();
    const dummyUserPwd = expect.anything();
    const dummyProfPicUrl = expect.anything();

    const results = await updateUserProfileDataService(
      dummyId,
      dummyReqBody,
      dummyUserPwd,
      dummyProfPicUrl
    );

    validateInstanceOf(results, Error);
  });

  test('should validate successfully updating fields for user', async () => {
    validateNotEmpty(validUser);

    const { _id } = validUser;
    const dummyUserPwd = expect.anything();
    const dummyProfPicUrl = 'https://dummy.image.com/dummyImg.jpg';
    const dummyRequestBody = {
      email: 'updated@email.com',
      username: 'updatedDummyUser',
      firstName: 'Updated Dummy',
      lastName: 'Updated User',
    };

    const results = await updateUserProfileDataService(
      _id,
      dummyRequestBody,
      dummyUserPwd,
      dummyProfPicUrl
    );

    validateNotEmpty(results);

    const { local, profilePictureUrl } = results;

    validateStringEquality(profilePictureUrl, dummyProfPicUrl);

    const { email, username, firstName, lastName, password } = local;

    validateStringEquality(email, dummyRequestBody.email);
    validateStringEquality(username, dummyRequestBody.username);
    validateStringEquality(firstName, dummyRequestBody.firstName);
    validateStringEquality(lastName, dummyRequestBody.lastName);
    validateStringEquality(password, 'Anything');
  });
});
