const { render500ErrorHelper } = require('../index');
const {
  mockResponse,
} = require('../../../../utils/test-utils/interceptors.utils');

const {
  validateMockValueToHaveBeenCalled,
} = require('../../../../utils/test-utils/validators.utils');

describe('render500Error Helper Test Suite', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should validate res.status & res.render being called', () => {
    const res = mockResponse();

    render500ErrorHelper(res);

    const { status, render } = res;

    validateMockValueToHaveBeenCalled(status);
    validateMockValueToHaveBeenCalled(render);
  });
});
