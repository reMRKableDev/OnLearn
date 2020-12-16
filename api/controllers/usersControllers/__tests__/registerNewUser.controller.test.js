const { registerNewUserController } = require('../index');
const {
  validateMockValueToHaveBeenCalled,
} = require('../../../../utils/test-utils/validators.utils');
const {
  mockRequest,
  mockResponse,
} = require('../../../../utils/test-utils/interceptors.utils');

describe('createNewUserController Test Suite', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should validate res.send gets sent', async () => {
    const req = mockRequest();
    const res = mockResponse();

    await registerNewUserController(req, res);
    const { login } = req;

    validateMockValueToHaveBeenCalled(login);
  });
});
