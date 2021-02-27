const { deleteTaughtCourseController } = require('../index');
const { render500ErrorHelper } = require('../../helpers');

const {
  validateMockValueToHaveBeenCalled,
} = require('../../../../utils/test-utils/validators.utils');
const {
  setupReqRes,
  clearMocks,
} = require('../../../../utils/test-utils/courseControllerDeps');
const {
  deleteCourseService,
} = require('../../../../database/services/modelServices/courseServices');

jest.mock('../../helpers');
jest.mock('../../../../database/services/modelServices/courseServices');

let req;
let res;

describe('deleteTaughtCourse Controller Test Suite', () => {
  beforeEach(() => {
    const { request, response } = setupReqRes();

    req = request;
    res = response;
  });

  afterEach(() => {
    clearMocks();
  });

  test('should validate render500ErrorHelper is called', async () => {
    deleteCourseService.mockReturnValueOnce(new Error());

    await deleteTaughtCourseController(req, res);

    validateMockValueToHaveBeenCalled(render500ErrorHelper);
  });

  test('should validate res.status & res.render is called', async () => {
    await deleteTaughtCourseController(req, res);

    const { flash } = req;
    const { redirect } = res;

    validateMockValueToHaveBeenCalled(flash);
    validateMockValueToHaveBeenCalled(redirect);
  });
});
