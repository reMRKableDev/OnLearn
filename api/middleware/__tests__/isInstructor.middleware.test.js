const { isInstructor } = require('../index');
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

describe('isInstructor Test Suite', () => {
  beforeEach(() => {
    req = mockRequest();
    res = mockResponse();
    next = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should validate req.flash & res.redirect being called', () => {
    req.user.role = 'student';

    isInstructor(req, res, next);

    const { redirect } = res;
    const { flash } = req;

    validateMockValueToHaveBeenCalled(redirect);
    validateMockValueToHaveBeenCalled(flash);
  });

  test('should validate next is being called', () => {
    req.user.role = 'instructor';

    isInstructor(req, res, next);

    validateMockValueToHaveBeenCalled(next);
  });
});
