jest.mock('../../helpers');
jest.mock('../../../../database/services/modelServices/courseServices');

const { registerToCourseController } = require('../index');
const { render500ErrorHelper } = require('../../helpers');
const {
  validateMockValueToHaveBeenCalled,
} = require('../../../../utils/test-utils/validators.utils');
const {
  mockRequest,
  mockResponse,
} = require('../../../../utils/test-utils/interceptors.utils');
const {
  findOneCourseService,
} = require('../../../../database/services/modelServices/courseServices');

let req;
let res;

describe('registerToCourse Controller Test Suite', () => {
  beforeEach(() => {
    req = mockRequest();
    res = mockResponse();

    req.user = { _id: expect.anything() };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should validate render500ErrorHelper is called ', async () => {
    findOneCourseService.mockReturnValueOnce(new Error());

    await registerToCourseController(req, res);

    validateMockValueToHaveBeenCalled(findOneCourseService);
    validateMockValueToHaveBeenCalled(render500ErrorHelper);
  });

  test('should validate res.redirect called ', async () => {
    findOneCourseService.mockImplementationOnce(() => ({
      students: [],
      save: jest.fn(),
    }));

    await registerToCourseController(req, res);

    validateMockValueToHaveBeenCalled(findOneCourseService);

    const { flash } = req;
    const { redirect } = res;

    validateMockValueToHaveBeenCalled(flash);
    validateMockValueToHaveBeenCalled(redirect);
  });
});
