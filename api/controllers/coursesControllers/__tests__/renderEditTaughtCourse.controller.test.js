const { renderEditTaughtCourseController } = require('../index');
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

jest.mock('../../helpers');
jest.mock('../../../../database/services/modelServices/courseServices');

let req;
let res;

describe('renderEditTaughtCourse Controller Test Suite', () => {
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

    await renderEditTaughtCourseController(req, res);

    validateMockValueToHaveBeenCalled(render500ErrorHelper);
  });

  test('should validate redirectNonExistentDataHelper is called', async () => {
    findOneCourseService.mockReturnValueOnce(null);

    await renderEditTaughtCourseController(req, res);

    validateMockValueToHaveBeenCalled(redirectNonExistentDataHelper);
  });

  test('should validate res.status & res.render is called', async () => {
    await renderEditTaughtCourseController(req, res);

    const { status, render } = res;

    validateMockValueToHaveBeenCalled(status);
    validateMockValueToHaveBeenCalled(render);
  });
});
