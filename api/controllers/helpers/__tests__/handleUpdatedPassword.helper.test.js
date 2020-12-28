jest.mock('../render500Error.helper');
const { handleUpdatedPasswordHelper } = require('../index');
const { render500ErrorHelper } = require('../render500Error.helper');
const {
  mockResponse,
} = require('../../../../utils/test-utils/interceptors.utils');

const {
  validateEquality,
  validateMockValueToHaveBeenCalled,
} = require('../../../../utils/test-utils/validators.utils');

let res;

describe('handleUpdatedPassword Helper Test Suite', () => {
  beforeEach(() => {
    res = mockResponse();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should validate render500ErrorHelper to have been called', async () => {
    const dummyPassword = new Error();

    await handleUpdatedPasswordHelper(dummyPassword, res);

    validateMockValueToHaveBeenCalled(render500ErrorHelper);
  });

  test('should validate new password is hashed correctly', async () => {
    const dummyPwd = 'hello';

    const results = await handleUpdatedPasswordHelper(dummyPwd, res);

    const bcryptRegEx = /^\$2[ayb]\$.{56}$/gm;
    const isHashMatch = bcryptRegEx.test(results);

    validateEquality(isHashMatch, true);
  });
});
