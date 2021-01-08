jest.mock('../../helpers');
jest.mock('../../../../database/services/modelServices/courseServices');

const {
  renderStudentListController,
} = require('../renderStudentList.controller');
const {
  render500ErrorHelper,
  redirectNonexistentCourseHelper,
} = require('../../helpers');
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

describe('renderStudentList Controller Test Suite', () => {
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

    await renderStudentListController(req, res);

    validateMockValueToHaveBeenCalled(render500ErrorHelper);
  });

  test('should validate redirectNonexistentCourseHelper is called', async () => {
    findOneCourseService.mockReturnValueOnce(null);

    await renderStudentListController(req, res);

    validateMockValueToHaveBeenCalled(redirectNonexistentCourseHelper);
  });

  test('should validate res.status & res.render is called', async () => {
    await renderStudentListController(req, res);

    const { status, render } = res;

    validateMockValueToHaveBeenCalled(status);
    validateMockValueToHaveBeenCalled(render);
  });
});
