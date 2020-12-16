const { renderLoginController } = require('../index');
const {
  validateMockValueToHaveBeenCalled,
} = require('../../../../utils/test-utils/validators.utils');
const {
  mockRequest,
  mockResponse,
} = require('../../../../utils/test-utils/interceptors.utils');

describe('renderLoginController Test Suite', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should validate res.status & res.render is called', () => {
    const req = mockRequest();
    const res = mockResponse();

    renderLoginController(req, res);
    const { status, render } = res;

    validateMockValueToHaveBeenCalled(status);
    validateMockValueToHaveBeenCalled(render);
  });
});
