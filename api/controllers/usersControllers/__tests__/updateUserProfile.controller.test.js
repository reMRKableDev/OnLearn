jest.mock('../../helpers/render500Error.helper');
jest.mock('../../helpers/handleUpdatedPassword.helper');
jest.mock(
  '../../../../database/services/modelServices/userServices/updateUserProfileData.service'
);

const { updateUserProfileController } = require('../index');
const { render500ErrorHelper } = require('../../helpers/render500Error.helper');
const {
  handleUpdatedPasswordHelper,
} = require('../../helpers/handleUpdatedPassword.helper');
const {
  updateUserProfileDataService,
} = require('../../../../database/services/modelServices/userServices/updateUserProfileData.service');
const { fakeUserData } = require('../../../../database/fixtures');
const {
  dummyEditPasswordWeak,
  dummyEditPasswordStrong,
} = require('../../../../configs');
const {
  createNewUserService,
} = require('../../../../database/services/modelServices/userServices/createNewUser.service');
const {
  dbConnect,
  dbDisconnect,
} = require('../../../../utils/test-utils/dbHandler.utils');
const {
  mockRequest,
  mockResponse,
} = require('../../../../utils/test-utils/interceptors.utils');
const {
  validateMockValueToHaveBeenCalled,
} = require('../../../../utils/test-utils/validators.utils');

let res;
let req;
let validUser;

describe('updateUserProfile Controller Test Suite', () => {
  beforeAll(async () => {
    await dbConnect();
    fakeUserData.role = 'student';
    validUser = await createNewUserService(fakeUserData);
  });
  afterAll(async () => dbDisconnect());

  beforeEach(() => {
    req = mockRequest();
    res = mockResponse();

    const { _id, local } = validUser;

    req.user.local = local;
    req.params.id = _id;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should validate req.flash & res.redirect are called when passwords do not match', async () => {
    req.body = {
      password: dummyEditPasswordWeak,
      password2: expect.anything(),
      existingImage: 'https://profile.picture.com',
    };

    await updateUserProfileController(req, res);

    const { flash } = req;
    const { redirect } = res;

    validateMockValueToHaveBeenCalled(flash);
    validateMockValueToHaveBeenCalled(redirect);
  });

  test('should validate req.flash & res.redirect with weak password ', async () => {
    req.body = {
      password: dummyEditPasswordWeak,
      password2: dummyEditPasswordWeak,
      existingImage: 'https://profile.picture.com',
    };

    await updateUserProfileController(req, res);

    const { flash } = req;
    const { redirect } = res;

    validateMockValueToHaveBeenCalled(flash);
    validateMockValueToHaveBeenCalled(redirect);
  });

  test('should validate render500Error Helper is called upon error ', async () => {
    req.body = {
      email: 'update@test.com',
      username: 'UpdateTest',
      firstName: 'Update',
      lastName: 'Test',
      password: dummyEditPasswordStrong,
      password2: dummyEditPasswordStrong,
      existingImage: 'https://profile.picture.com',
    };

    updateUserProfileDataService.mockReturnValueOnce(new Error());

    await updateUserProfileController(req, res);

    validateMockValueToHaveBeenCalled(updateUserProfileDataService);

    validateMockValueToHaveBeenCalled(render500ErrorHelper);
  });

  test('should validate a successful redirect to /profile', async () => {
    req.body = {
      email: 'update@test.com',
      username: 'UpdateTest',
      firstName: 'Update',
      lastName: 'Test',
      password: dummyEditPasswordStrong,
      password2: dummyEditPasswordStrong,
    };

    req.file.path = 'https://file.path.com';

    await updateUserProfileController(req, res);

    const { redirect } = res;

    validateMockValueToHaveBeenCalled(updateUserProfileDataService);
    validateMockValueToHaveBeenCalled(redirect);
  });
});
