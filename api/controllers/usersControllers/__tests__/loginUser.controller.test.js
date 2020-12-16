jest.mock('../../helpers');
const { loginUserController } = require('../index');
const {
  mockRequest,
  mockResponse,
} = require('../../../../utils/test-utils/interceptors.utils');
const {
  validateMockValueToHaveBeenCalled,
} = require('../../../../utils/test-utils/validators.utils');
const {
  authenticateUserHelper,
  renderLoginFormWithErrorsHelper,
} = require('../../helpers');

let req;
let res;
let next;

describe('loginUser Controller Test Suite', () => {
  beforeEach(() => {
    req = mockRequest();
    res = mockResponse();
    next = () => jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should validate login form with errors when req.body is empty', () => {
    req.body = { user: '', password: '' };

    loginUserController(req, res, next);

    validateMockValueToHaveBeenCalled(renderLoginFormWithErrorsHelper);
  });

  test('should validate login form with errors when req.body.password is empty', () => {
    req.body = { user: 'dummy', password: '' };

    loginUserController(req, res, next);

    validateMockValueToHaveBeenCalled(renderLoginFormWithErrorsHelper);
  });

  test('should validate login form with errors when req.body.user is empty', () => {
    req.body = { user: '', password: '*****' };

    loginUserController(req, res, next);

    validateMockValueToHaveBeenCalled(renderLoginFormWithErrorsHelper);
  });

  test('should validate user authentication', () => {
    req.body = { user: 'dummy', password: '*****' };

    loginUserController(req, res, next);

    validateMockValueToHaveBeenCalled(authenticateUserHelper);
  });
});
