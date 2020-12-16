const { logoutUserController } = require('../index');
const {
  mockRequest,
  mockResponse,
} = require('../../../../utils/test-utils/interceptors.utils');
const {
  validateMockValueToHaveBeenCalled,
} = require('../../../../utils/test-utils/validators.utils');

describe('logoutUser Controller Test Suite', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should validate logout path', () => {
    const req = mockRequest();
    const res = mockResponse();
    const { logout } = req;

    logoutUserController(req, res);

    validateMockValueToHaveBeenCalled(logout);
  });
});
