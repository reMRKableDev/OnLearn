const { redirectNonexistentCourseHelper } = require('../index');
const {
  mockRequest,
  mockResponse,
} = require('../../../../utils/test-utils/interceptors.utils');

const {
  validateMockValueToHaveBeenCalled,
} = require('../../../../utils/test-utils/validators.utils');

describe('redirectNonexistentCourse Helper Test Suite', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should validate res.status & res.render being called', () => {
    const req = mockRequest();
    const res = mockResponse();

    redirectNonexistentCourseHelper(req, res);

    const { flash } = req;
    const { redirect } = res;

    validateMockValueToHaveBeenCalled(flash);
    validateMockValueToHaveBeenCalled(redirect);
  });
});
