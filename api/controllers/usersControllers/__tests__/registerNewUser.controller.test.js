jest.mock('express-validator');
const { validationResult } = require('express-validator');
const { registerNewUserController } = require('../index');
const {
  validateMockValueToHaveBeenCalled,
} = require('../../../../utils/test-utils/validators.utils');
const {
  mockRequest,
  mockResponse,
} = require('../../../../utils/test-utils/interceptors.utils');

describe('registerNewUserController Test Suite', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should validate req.login gets called', async () => {
    validationResult.mockImplementation(() => ({
      isEmpty: jest.fn().mockReturnValue(false),
      array: jest
        .fn()
        .mockReturnValue([{ test1: 'error1' }, { test2: 'error2' }]),
    }));

    const req = mockRequest();
    const res = mockResponse();

    await registerNewUserController(req, res);
    validateMockValueToHaveBeenCalled(validationResult);
  });
});
