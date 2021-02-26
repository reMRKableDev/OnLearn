jest.mock('../../helpers');
jest.mock('../../../../database/services/modelServices/courseServices');

const {
  setupReqRes,
  clearMocks,
} = require('../../../../utils/test-utils/courseControllerDeps');
const {
  findOneCourseService,
} = require('../../../../database/services/modelServices/courseServices');
const {
  render500ErrorHelper,
  redirectNonExistentDataHelper,
  checkCurrentUserRelationToCourseHelper,
} = require('../../helpers');
const {
  validateMockValueToHaveBeenCalled,
} = require('../../../../utils/test-utils/validators.utils');
const { renderCourseDetailsController } = require('../index');

let req;
let res;

describe('renderCourseDetails Controller Test Suite', () => {
  beforeEach(() => {
    const { request, response } = setupReqRes();
    req = request;
    res = response;
  });

  afterEach(() => {
    clearMocks();
  });

  test('should validate render500ErrorHelper is called', async () => {
    findOneCourseService.mockReturnValueOnce(new Error());

    await renderCourseDetailsController(req, res);

    validateMockValueToHaveBeenCalled(render500ErrorHelper);
  });

  test('should validate redirectNonExistentDataHelper is called', async () => {
    findOneCourseService.mockReturnValueOnce(null);

    await renderCourseDetailsController(req, res);

    validateMockValueToHaveBeenCalled(redirectNonExistentDataHelper);
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
