jest.mock('../../../../database/services/modelServices/userServices');
jest.mock('../handleIfAsyncError.helper');

const { createNewUserHelper } = require('../index');
const {
  mockResponse,
  mockRequest,
} = require('../../../../utils/test-utils/interceptors.utils');
const {
  validateMockValueToHaveBeenCalled,
} = require('../../../../utils/test-utils/validators.utils');
const {
  createNewUserService,
} = require('../../../../database/services/modelServices/userServices');
const { handleIfAsyncErrorHelper } = require('../handleIfAsyncError.helper');
const { fakeUserData } = require('../../../../database/fixtures');

describe('creatNewUser Test Suite', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should validate incoming data follows a successful flow', async () => {
    const req = mockRequest();
    const res = mockResponse();

    req.body = fakeUserData;

    await createNewUserHelper(req, res);

    validateMockValueToHaveBeenCalled(createNewUserService);
    validateMockValueToHaveBeenCalled(handleIfAsyncErrorHelper);

    const { login } = req;
    validateMockValueToHaveBeenCalled(login);
  });
});
