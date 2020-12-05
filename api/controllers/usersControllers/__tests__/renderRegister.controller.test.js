const { renderRegisterController } = require('../index');
const {
  validateMockResponseStatusToHaveBeenCalled,
  validateMockResponseRenderToHaveBeenCalled,
} = require('../../../../utils/validators.utils');
const {
  mockRequest,
  mockResponse,
} = require('../../../../utils/interceptors.utils');

describe('renderRegisterController Test Suite', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should validate res.status & res.render is called', () => {
    const req = mockRequest();
    const res = mockResponse();

    renderRegisterController(req, res);
    const { status, render } = res;

    validateMockResponseStatusToHaveBeenCalled(status);
    validateMockResponseRenderToHaveBeenCalled(render);
  });
});
