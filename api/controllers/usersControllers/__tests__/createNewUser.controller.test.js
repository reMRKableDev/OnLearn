const { createNewUserController } = require('../index');
const {
  validateMockResponseSendToHaveBeenCalled,
} = require('../../../../utils/test-utils/validators.utils');
const {
  mockRequest,
  mockResponse,
} = require('../../../../utils/test-utils/interceptors.utils');

describe('createNewUserController Test Suite', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should validate res.send gets sent', () => {
    const req = mockRequest();
    const res = mockResponse();

    createNewUserController(req, res);
    const { send } = res;

    validateMockResponseSendToHaveBeenCalled(send);
  });
});
