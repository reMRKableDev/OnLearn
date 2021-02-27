jest.mock('../../helpers');
jest.mock('../../../../database/services/modelServices/lessonServices');

const { renderLessonDetailsController } = require('../index');
const {
  setupReqRes,
  clearMocks,
} = require('../../../../utils/test-utils/courseControllerDeps');
const {
  render500ErrorHelper,
  redirectNonExistentDataHelper,
} = require('../../helpers');
const {
  findOneLessonService,
} = require('../../../../database/services/modelServices/lessonServices');
const {
  validateMockValueToHaveBeenCalled,
} = require('../../../../utils/test-utils/validators.utils');

let req;
let res;

describe('renderLessonDetails Controller Test Suite', () => {
  beforeEach(() => {
    const { request, response } = setupReqRes();
    req = request;
    res = response;
  });
  afterEach(() => {
    clearMocks();
  });

  test('should validate render500ErrorHelper is called', async () => {
    findOneLessonService.mockReturnValueOnce(new Error());

    await renderLessonDetailsController(req, res);

    validateMockValueToHaveBeenCalled(render500ErrorHelper);
  });

  test('should validate redirectNonExistentDataHelper is called', async () => {
    findOneLessonService.mockReturnValueOnce(null);

    await renderLessonDetailsController(req, res);

    validateMockValueToHaveBeenCalled(redirectNonExistentDataHelper);
  });

  test('should validate res.status & res.render is called', async () => {
    findOneLessonService.mockReturnValueOnce({
      students: expect.anything(),
      instructors: expect.anything(),
    });

    await renderLessonDetailsController(req, res);

    const { status, render } = res;

    validateMockValueToHaveBeenCalled(status);
    validateMockValueToHaveBeenCalled(render);
  });
});
