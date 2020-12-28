const { renderEditUserProfileController } = require('../index');
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
const {
  fakeUserData,
  fakeIdFormatData,
} = require('../../../../database/fixtures');

let res;
let req;
let validUser;

describe('renderEditUserProfile Controller Test Suite', () => {
  beforeAll(async () => {
    await dbConnect();
    validUser = await createNewUserService(fakeUserData);
  });
  afterAll(async () => dbDisconnect());

  beforeEach(() => {
    req = mockRequest();
    res = mockResponse();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should validate that req.flash & res.redirect are called when ObjectId is invalid', async () => {
    const { incorrectFormat } = fakeIdFormatData;
    req.params = { id: incorrectFormat };

    await renderEditUserProfileController(req, res);

    const { flash } = req;
    const { redirect } = res;

    validateMockValueToHaveBeenCalled(flash);
    validateMockValueToHaveBeenCalled(redirect);
  });

  test('should validate req.flash & res.redirect when there is no user found with given Id', async () => {
    const { correctFormat } = fakeIdFormatData;
    req.params = { id: correctFormat };

    await renderEditUserProfileController(req, res);

    const { redirect } = res;
    const { flash } = req;

    validateMockValueToHaveBeenCalled(redirect);
    validateMockValueToHaveBeenCalled(flash);
  });

  test('should validate that res.status is called when the user if found', async () => {
    const { _id } = validUser;
    req.params = { id: _id };

    await renderEditUserProfileController(req, res);

    const { status } = res;

    validateMockValueToHaveBeenCalled(status);
  });
});
