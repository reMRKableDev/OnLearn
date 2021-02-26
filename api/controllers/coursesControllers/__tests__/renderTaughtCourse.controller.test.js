jest.mock('../../helpers');
jest.mock('../../../../database/services/modelServices/courseServices');

const {
  renderTaughtCourseController,
} = require('../renderTaughtCourse.controller');
const {
  render500ErrorHelper,
  redirectNonExistentDataHelper,
} = require('../../helpers');
const {
  findOneCourseService,
} = require('../../../../database/services/modelServices/courseServices');
const {
  validateMockValueToHaveBeenCalled,
} = require('../../../../utils/test-utils/validators.utils');
const {
  setupReqRes,
  clearMocks,
} = require('../../../../utils/test-utils/courseControllerDeps');

let req;
let res;

describe('renderTaughtCourse Controller Test Suite', () => {
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

    await renderTaughtCourseController(req, res);

    validateMockValueToHaveBeenCalled(render500ErrorHelper);
  });

  test('should validate redirectNonExistentDataHelper is called', async () => {
    findOneCourseService.mockReturnValueOnce(null);

    await renderTaughtCourseController(req, res);

    validateMockValueToHaveBeenCalled(redirectNonExistentDataHelper);
  });

  test('should validate res.status & res.render is called', async () => {
    await renderTaughtCourseController(req, res);

    const { status, render } = res;

    validateMockValueToHaveBeenCalled(status);
    validateMockValueToHaveBeenCalled(render);
  });
});
