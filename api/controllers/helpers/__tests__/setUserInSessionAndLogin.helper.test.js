const {
  setUserInSessionAndLoginHelper,
} = require('../setUserInSessionAndLogin.helper');
const {
  mockResponse,
  mockRequest,
} = require('../../../../utils/test-utils/interceptors.utils');
const {
  validateNotEmpty,
  validateObjectMatch,
} = require('../../../../utils/test-utils/validators.utils');
const { fakeUserData } = require('../../../../database/fixtures');

describe('setUserInSessionAndLoginHelper Test Suite', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should ', () => {
    const req = mockRequest();
    const res = mockResponse();

    req.login = (handledResults, callback) => {
      callback(handledResults);
    };

    req.flash = (messageType, message) => ({
      messageType,
      message,
    });

    setUserInSessionAndLoginHelper(req, fakeUserData, res);

    const expectedFlashObject = {
      messageType: 'success_msg',
      message: 'New User Added',
    };
    const { flash } = req;

    const flashResults = flash('success_msg', 'New User Added');

    validateNotEmpty(flashResults);
    validateObjectMatch(flashResults, expectedFlashObject);
  });
});
