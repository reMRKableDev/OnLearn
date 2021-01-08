jest.mock('../../helpers');
jest.mock('../../../../database/services/modelServices/courseServices');

const {
  renderTaughtCourseController,
} = require('../renderTaughtCourse.controller');
const { render500ErrorHelper } = require('../../helpers');
const {
  findOneCourseService,
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

describe('renderTaughtCourse Controller Test Suite', () => {
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
    findOneCourseService.mockReturnValueOnce(new Error());

    await renderTaughtCourseController(req, res);

    validateMockValueToHaveBeenCalled(render500ErrorHelper);
  });

  test('should validate req.flash & res.redirect is called', async () => {
    findOneCourseService.mockReturnValueOnce(null);

    await renderTaughtCourseController(req, res);

    const { flash } = req;
    const { redirect } = res;

    validateMockValueToHaveBeenCalled(flash);
    validateMockValueToHaveBeenCalled(redirect);
  });

  test('should validate res.status & res.render is called', async () => {
    await renderTaughtCourseController(req, res);

    const { status, render } = res;

    validateMockValueToHaveBeenCalled(status);
    validateMockValueToHaveBeenCalled(render);
  });
});
