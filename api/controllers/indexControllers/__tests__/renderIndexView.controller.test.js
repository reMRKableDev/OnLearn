const { renderIndexViewController } = require('../index');
const {
  validateMockValueToHaveBeenCalled,
} = require('../../../../utils/test-utils/validators.utils');
const {
  mockRequest,
  mockResponse,
} = require('../../../../utils/test-utils/interceptors.utils');

let req;
let res;

describe('renderIndexView Test Suite', () => {
  beforeEach(() => {
    req = mockRequest();
    res = mockResponse();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should validate res.status & res.render is called when a user is logged in', () => {
    req.user = { local: { username: expect.anything() } };

    renderIndexViewController(req, res);
    const { status, render } = res;

    validateMockValueToHaveBeenCalled(status);
    validateMockValueToHaveBeenCalled(render);
  });

  test('should validate res.status & res.render is called when there is no user logged in', () => {
    req.user = null;

    renderIndexViewController(req, res);
    const { status, render } = res;

    validateMockValueToHaveBeenCalled(status);
    validateMockValueToHaveBeenCalled(render);
  });
});
