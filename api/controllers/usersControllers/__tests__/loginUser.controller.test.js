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

const loginFormTestHelper = (body, request, response, done, validation) => {
  request.body = body;
  loginUserController(request, response, done);
  validateMockValueToHaveBeenCalled(validation);
};

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
    loginFormTestHelper(
      { user: '', password: '' },
      req,
      res,
      next,
      renderLoginFormWithErrorsHelper
    );
  });

  test('should validate login form with errors when req.body.password is empty', () => {
    loginFormTestHelper(
      { user: 'dummy', password: '' },
      req,
      res,
      next,
      renderLoginFormWithErrorsHelper
    );
  });

  test('should validate login form with errors when req.body.user is empty', () => {
    loginFormTestHelper(
      { user: '', password: '*****' },
      req,
      res,
      next,
      renderLoginFormWithErrorsHelper
    );
  });

  test('should validate user authentication', () => {
    loginFormTestHelper(
      { user: 'dummy', password: '*****' },
      req,
      res,
      next,
      authenticateUserHelper
    );
  });
});
