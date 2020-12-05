const { createNewUserController } = require('../index');
const {
  validateMockResponseSendToHaveBeenCalled,
} = require('../../../utils/validators.utils');

const {
  mockRequest,
  mockResponse,
} = require('../../../utils/interceptors.utils');

let req;
let res;

describe('renderIndexView Test Suite', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should validate res.send gets sent', () => {
    req = mockRequest();
    res = mockResponse();

    createNewUserController(req, res);
    const { send } = res;

    validateMockResponseSendToHaveBeenCalled(send);
  });

  // TODO: Write a test for when errors occur... not sure if needed but putting this here anyway
});
