const { createNewGoogleUserService } = require('../index');
const {
  dbConnect,
  dbDisconnect,
} = require('../../../../../utils/test-utils/dbHandler.utils');
const {
  validateNotEmpty,
  validateStringEquality,
  validateMongoDuplicationError,
} = require('../../../../../utils/test-utils/validators.utils');

const fakeGoogleProfileData = {
  id: '1a2b3c',
  name: { givenName: 'Google', familyName: 'User' },
  displayName: 'DummyGoogleUser',
  emails: [{ value: 'duMmy@dummy.com' }],
  photos: [{ value: 'https://photo-goes-here.com' }],
};
const fakeAccessToken = expect.anything();

describe('createNewGoogleUser Service Test Suite', () => {
  beforeEach(async () => dbConnect());
  afterAll(async () => dbDisconnect());

  test('should validate successfully adding Google user', async () => {
    const results = await createNewGoogleUserService(
      fakeGoogleProfileData,
      fakeAccessToken
    );

    validateNotEmpty(results);

    const { profilePictureUrl, local, google } = results;

    validateStringEquality(
      profilePictureUrl,
      fakeGoogleProfileData.photos[0].value
    );
    validateStringEquality(local.username, fakeGoogleProfileData.displayName);
    validateStringEquality(google.name, fakeGoogleProfileData.displayName);
  });

  test('should validate error when saving Google user', async () => {
    try {
      await createNewGoogleUserService(fakeGoogleProfileData, fakeAccessToken);
    } catch (error) {
      const { name, code } = error;
      validateMongoDuplicationError(name, code);
    }
  });
});
