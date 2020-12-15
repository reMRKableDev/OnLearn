jest.mock('../duplicateErrorMessage.helper');
const {
  duplicateErrorMessageHelper,
} = require('../duplicateErrorMessage.helper');
const {
  getDuplicateErrorMessageHelper,
} = require('../getDuplicateErrorMessage.helper');
const {
  validateMockValueToHaveBeenCalled,
} = require('../../../../utils/test-utils/validators.utils');

describe('getDuplicateErrorMessage Test Suite', () => {
  test('should validate duplicate message function is called for email', () => {
    const keyValue = {
      email: 'dummy@dummy.com',
    };

    getDuplicateErrorMessageHelper(keyValue);
    validateMockValueToHaveBeenCalled(duplicateErrorMessageHelper);
  });

  test('should validate duplicate message function is called for username', () => {
    const keyValue = {
      username: 'dummy',
    };

    getDuplicateErrorMessageHelper(keyValue);

    validateMockValueToHaveBeenCalled(duplicateErrorMessageHelper);
  });
});
