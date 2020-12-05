const { renderRegisterController } = require('../index');
const {
  validateMockResponseStatusToHaveBeenCalled,
  validateMockResponseRenderToHaveBeenCalled,
} = require('../../../utils/validators.utils');

const {
  mockRequest,
  mockResponse,
} = require('../../../utils/interceptors.utils');

let req;
let res;

describe('renderIndexView Test Suite', () => {
  beforeEach(() => {
    req = mockRequest();
    res = mockResponse();

    renderRegisterController(req, res);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should validate res.status & res.render is called', () => {
    const { status, render } = res;

    validateMockResponseStatusToHaveBeenCalled(status);
    validateMockResponseRenderToHaveBeenCalled(render);
  });
});
