jest.mock('../../helpers');
jest.mock('../../../../database/services/modelServices/courseServices');

const { createNewCourseController } = require('../index');
const { render500ErrorHelper } = require('../../helpers');
const {
  validateMockValueToHaveBeenCalled,
} = require('../../../../utils/test-utils/validators.utils');
const {
  mockRequest,
  mockResponse,
} = require('../../../../utils/test-utils/interceptors.utils');
const {
  createNewCourseService,
} = require('../../../../database/services/modelServices/courseServices');

let req;
let res;

describe('createNewCourse Controller Test Suite', () => {
  beforeEach(() => {
    req = mockRequest();
    res = mockResponse();

    req.user = { _id: expect.anything() };
    req.body = { title: expect.anything(), description: expect.anything() };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should validate render500ErrorHelper is called ', async () => {
    createNewCourseService.mockReturnValueOnce(new Error());

    await createNewCourseController(req, res);

    validateMockValueToHaveBeenCalled(createNewCourseService);
    validateMockValueToHaveBeenCalled(render500ErrorHelper);
  });

  test('should validate res.redirect called ', async () => {
    createNewCourseService.mockImplementationOnce(() => ({
      instructors: [],
      save: jest.fn(),
    }));

    await createNewCourseController(req, res);

    validateMockValueToHaveBeenCalled(createNewCourseService);

    const { redirect } = res;
    validateMockValueToHaveBeenCalled(redirect);
  });
});
