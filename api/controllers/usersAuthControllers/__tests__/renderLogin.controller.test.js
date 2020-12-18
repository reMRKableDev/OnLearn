const { renderLoginController } = require('../index');
const {
  validateStringEquality,
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
    const message = `Missing credentials`;

    req.flash = () => message;

    renderLoginController(req, res);
    const { status, render } = res;
    const { flash } = req;

    validateStringEquality(flash(), message);
    validateMockValueToHaveBeenCalled(status);
    validateMockValueToHaveBeenCalled(render);
  });
});
