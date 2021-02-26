jest.mock('../../helpers');
jest.mock('../../../../database/services/modelServices/courseServices');

const {
  setupReqRes,
  clearMocks,
} = require('../../../../utils/test-utils/courseControllerDeps');
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
  renderStudentListController,
} = require('../renderStudentList.controller');

let req;
let res;

beforeEach(() => {
  const { request, response } = setupReqRes();

  req = request;
  res = response;
});

afterEach(() => {
  clearMocks();
});

describe('renderStudentList Controller Test Suite', () => {
  test('should validate render500ErrorHelper is called', async () => {
    findOneCourseService.mockReturnValueOnce(new Error());

    await renderStudentListController(req, res);

    validateMockValueToHaveBeenCalled(render500ErrorHelper);
  });

  test('should validate redirectNonExistentDataHelper is called', async () => {
    findOneCourseService.mockReturnValueOnce(null);

    await renderStudentListController(req, res);

    validateMockValueToHaveBeenCalled(redirectNonExistentDataHelper);
  });

  test('should validate res.status & res.render is called', async () => {
    await renderStudentListController(req, res);

    const { status, render } = res;

    validateMockValueToHaveBeenCalled(status);
    validateMockValueToHaveBeenCalled(render);
  });
});
