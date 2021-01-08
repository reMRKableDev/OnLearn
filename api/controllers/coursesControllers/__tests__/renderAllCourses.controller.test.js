jest.mock('../../helpers');
jest.mock('../../../../database/services/modelServices/courseServices');

const { renderAllCoursesController } = require('../index');
const { render500ErrorHelper } = require('../../helpers');
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

describe('renderAllCourses Controller Test Suite', () => {
  beforeEach(() => {
    req = mockRequest();
    res = mockResponse();

    req.user = {
      local: expect.anything(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should validate render500ErrorHelper is called', async () => {
    findAllCoursesService.mockReturnValueOnce(new Error());

    await renderAllCoursesController(req, res);

    validateMockValueToHaveBeenCalled(render500ErrorHelper);
  });

  test('should validate res.status & res.render is called', async () => {
    await renderAllCoursesController(req, res);

    const { status, render } = res;

    validateMockValueToHaveBeenCalled(status);
    validateMockValueToHaveBeenCalled(render);
  });
});
