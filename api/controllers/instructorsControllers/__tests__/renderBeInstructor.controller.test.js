const { renderBeInstructorController } = require('../index');
const {
  mockRequest,
  mockResponse,
} = require('../../../../utils/test-utils/interceptors.utils');
const {
  validateMockValueToHaveBeenCalled,
} = require('../../../../utils/test-utils/validators.utils');

let req;
let res;

describe('renderBeInstructor Controller Test Suite', () => {
  beforeEach(() => {
    req = mockRequest();
    res = mockResponse();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should validate res.status & res.render is called when role is student', () => {
    req.user = { _id: expect.anything(), role: 'student', local: jest.fn() };

    renderBeInstructorController(req, res);

    const { status, render } = res;
    validateMockValueToHaveBeenCalled(status);
    validateMockValueToHaveBeenCalled(render);
  });

  test('should validate res.redirect is called when role is instructor', () => {
    req.user = { _id: expect.anything(), role: 'instructor', local: jest.fn() };

    renderBeInstructorController(req, res);

    const { redirect } = res;
    validateMockValueToHaveBeenCalled(redirect);
  });
});
