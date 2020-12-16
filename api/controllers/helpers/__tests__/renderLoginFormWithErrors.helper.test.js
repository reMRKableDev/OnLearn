const { renderLoginFormWithErrorsHelper } = require('../index');
const {
  validateMockValueToHaveBeenCalled,
} = require('../../../../utils/test-utils/validators.utils');
const {
  mockResponse,
} = require('../../../../utils/test-utils/interceptors.utils');

describe('renderLoginFormWithErrors Test Suite', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should validate res.status & res.render get called', () => {
    const res = mockResponse();
    const user = 'dummy';
    const password = expect.anything();

    renderLoginFormWithErrorsHelper(res, user, password);
    const { status, render } = res;

    validateMockValueToHaveBeenCalled(status);
    validateMockValueToHaveBeenCalled(render);
  });
});
