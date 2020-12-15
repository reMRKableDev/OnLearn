jest.mock('../getDuplicateErrorMessage.helper');
const { handleIfAsyncErrorHelper } = require('../handleIfAsyncError.helper');
const {
  getDuplicateErrorMessageHelper,
} = require('../getDuplicateErrorMessage.helper');
const {
  validateNotEmpty,
  validateObjectMatch,
  validateMockValueToHaveBeenCalled,
} = require('../../../../utils/test-utils/validators.utils');

const { fakeUserData } = require('../../../../database/fixtures');

describe('Handle Async Error Helper Test Suite', () => {
  test('should validate incoming object as Error with duplicate code', () => {
    function DummyError() {
      this.name = 'DummyMongoError';
      this.code = 11000;
    }
    DummyError.prototype = Error.prototype;

    try {
      throw new DummyError();
    } catch (error) {
      validateNotEmpty(error);

      handleIfAsyncErrorHelper(error);

      validateMockValueToHaveBeenCalled(getDuplicateErrorMessageHelper);
    }
  });

  test('should validate incoming object with user data', () => {
    const results = handleIfAsyncErrorHelper(fakeUserData);

    validateNotEmpty(results);
    validateObjectMatch(results, fakeUserData);
  });
});
