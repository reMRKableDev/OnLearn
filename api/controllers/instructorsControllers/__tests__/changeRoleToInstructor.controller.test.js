jest.mock('../../../../database/services/modelServices/userServices');
const { changeRoleToInstructor } = require('../index');
const {
  updateUserRoleService,
} = require('../../../../database/services/modelServices/userServices');
const {
  validateMockValueToHaveBeenCalled,
} = require('../../../../utils/test-utils/validators.utils');
const {
  mockRequest,
  mockResponse,
} = require('../../../../utils/test-utils/interceptors.utils');

let req;
let res;

describe('changeRoleToInstructor Controller Test Suite', () => {
  beforeEach(() => {
    req = mockRequest();
    res = mockResponse();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should validate res.redirect called ', async () => {
    req.user = { _id: expect.anything() };
    await changeRoleToInstructor(req, res);

    validateMockValueToHaveBeenCalled(updateUserRoleService);

    const { redirect } = res;
    validateMockValueToHaveBeenCalled(redirect);
  });

  test('should validate res.status & res.render called ', async () => {
    req.user = { _id: expect.anything() };

    updateUserRoleService.mockImplementationOnce(() => new Error());

    await changeRoleToInstructor(req, res);

    validateMockValueToHaveBeenCalled(updateUserRoleService);

    const { status, render } = res;
    validateMockValueToHaveBeenCalled(status);
    validateMockValueToHaveBeenCalled(render);
  });
});
