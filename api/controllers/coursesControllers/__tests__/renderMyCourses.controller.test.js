jest.mock('../../helpers');
jest.mock('../../../../database/services/modelServices/courseServices');

const { renderMyCoursesController } = require('../index');
const { filterCoursesHelper, render500ErrorHelper } = require('../../helpers');
const {
  findAllCoursesService,
} = require('../../../../database/services/modelServices/courseServices');
const {
  validateMockValueToHaveBeenCalled,
} = require('../../../../utils/test-utils/validators.utils');
const {
  mockRequest,
  mockResponse,
} = require('../../../../utils/test-utils/interceptors.utils');

let req;
let res;

describe('renderMyCourses Controller Test Suite', () => {
  beforeEach(() => {
    req = mockRequest();
    res = mockResponse();

    req.user = {
      _id: expect.anything(),
      local: expect.anything(),
      role: expect.anything(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should validate render500ErrorHelper is called', async () => {
    findAllCoursesService.mockReturnValueOnce(new Error());

    await renderMyCoursesController(req, res);

    validateMockValueToHaveBeenCalled(render500ErrorHelper);
  });

  test('should validate filterCoursesHelper, res.status & res.render is called', async () => {
    filterCoursesHelper.mockReturnValueOnce({
      coursesTaught: expect.anything(),
      coursesLearned: expect.anything(),
    });

    await renderMyCoursesController(req, res);

    validateMockValueToHaveBeenCalled(filterCoursesHelper);

    const { status, render } = res;

    validateMockValueToHaveBeenCalled(status);
    validateMockValueToHaveBeenCalled(render);
  });
});
