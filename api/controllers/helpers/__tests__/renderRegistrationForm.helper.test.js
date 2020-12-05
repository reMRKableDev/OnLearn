const { renderRegistrationFormWithErrorsHelper } = require('../index');
const {
  validateMockResponseStatusToHaveBeenCalled,
  validateMockResponseRenderToHaveBeenCalled,
} = require('../../../../utils/validators.utils');

const {
  mockResponse,
  mockErrorRequest,
} = require('../../../../utils/interceptors.utils');

let req;
let res;

describe('renderIndexView Test Suite', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should validate res.status & res.render get called', () => {
    req = mockErrorRequest();
    res = mockResponse();

    const dummyError = { array: jest.fn() };

    renderRegistrationFormWithErrorsHelper(res, req.body, dummyError);
    const { status, render } = res;

    validateMockResponseStatusToHaveBeenCalled(status);
    validateMockResponseRenderToHaveBeenCalled(render);
  });
});
