const { renderRegistrationFormWithErrorsHelper } = require('../index');
const {
  validateMockResponseStatusToHaveBeenCalled,
  validateMockResponseRenderToHaveBeenCalled,
} = require('../../../../utils/test-utils/validators.utils');

const {
  mockResponse,
  mockErrorRequest,
} = require('../../../../utils/test-utils/interceptors.utils');

describe('renderIndexView Test Suite', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should validate res.status & res.render get called', () => {
    const req = mockErrorRequest();
    const res = mockResponse();

    const dummyError = { array: jest.fn() };

    renderRegistrationFormWithErrorsHelper(res, req, dummyError);
    const { status, render } = res;

    validateMockResponseStatusToHaveBeenCalled(status);
    validateMockResponseRenderToHaveBeenCalled(render);
  });
});
