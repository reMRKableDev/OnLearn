jest.mock('../../helpers');
jest.mock('../../../../database/services/modelServices/courseServices');

const { render500ErrorHelper } = require('../../helpers');
const { renderAllCoursesController } = require('../index');
const {
  findAllCoursesService,
} = require('../../../../database/services/modelServices/courseServices');
const {
  setupReqRes,
  clearMocks,
} = require('../../../../utils/test-utils/courseControllerDeps');
const {
  validateMockValueToHaveBeenCalled,
} = require('../../../../utils/test-utils/validators.utils');

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

describe('renderAllCourses Controller Test Suite', () => {
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
