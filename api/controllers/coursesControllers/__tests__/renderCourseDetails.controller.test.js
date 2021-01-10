jest.mock('../../helpers');
jest.mock('../../../../database/services/modelServices/courseServices');

const { renderCourseDetailsController } = require('../index');
const {
  render500ErrorHelper,
  redirectNonexistentCourseHelper,
  checkCurrentUserRelationToCourseHelper,
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

describe('renderCourseDetails Controller Test Suite', () => {
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

    await renderCourseDetailsController(req, res);

    validateMockValueToHaveBeenCalled(render500ErrorHelper);
  });

  test('should validate redirectNonexistentCourseHelper is called', async () => {
    findOneCourseService.mockReturnValueOnce(null);

    await renderCourseDetailsController(req, res);

    validateMockValueToHaveBeenCalled(redirectNonexistentCourseHelper);
  });

  test('should validate res.status & res.render is called', async () => {
    findOneCourseService.mockReturnValueOnce({
      students: expect.anything(),
      instructors: expect.anything(),
    });

    checkCurrentUserRelationToCourseHelper.mockReturnValueOnce({
      isCurrentUserInStudentList: expect.anything(),
      isCurrentUserTheCourseInstructor: expect.anything(),
    });

    await renderCourseDetailsController(req, res);

    validateMockValueToHaveBeenCalled(checkCurrentUserRelationToCourseHelper);

    const { status, render } = res;

    validateMockValueToHaveBeenCalled(status);
    validateMockValueToHaveBeenCalled(render);
  });
});
