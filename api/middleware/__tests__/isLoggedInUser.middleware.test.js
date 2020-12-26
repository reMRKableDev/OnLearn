const { isLoggedInUser } = require('../index');
const {
  mockRequest,
  mockResponse,
} = require('../../../utils/test-utils/interceptors.utils');
const {
  validateMockValueToHaveBeenCalled,
} = require('../../../utils/test-utils/validators.utils');

let req;
let res;
let next;

describe('isLoggedInUser Test Suite', () => {
  beforeEach(() => {
    req = mockRequest();
    res = mockResponse();
    next = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should validate next being called', () => {
    req.isAuthenticated = () => true;

    isLoggedInUser(req, res, next);
    validateMockValueToHaveBeenCalled(next);
  });

  test('should validate redirect is being called', () => {
    req.isAuthenticated = () => false;

    const { redirect } = res;

    isLoggedInUser(req, res, next);
    validateMockValueToHaveBeenCalled(redirect);
  });
});
