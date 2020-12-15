const {
  getDuplicateErrorMessageHelper,
} = require('../getDuplicateErrorMessage.helper');
const {
  validateStringEquality,
} = require('../../../../utils/test-utils/validators.utils');

const expectedResult = (input) =>
  `Sorry, ${input} already exists! Please register with another one or login to your account`;

describe('getDuplicateErrorMessage Test Suite', () => {
  test('should validate duplicate message function is called for email', () => {
    const keyValue = {
      email: 'dummy@dummy.com',
    };

    const results = getDuplicateErrorMessageHelper(keyValue);
    validateStringEquality(results, expectedResult(keyValue.email));
  });

  test('should validate duplicate message function is called for username', () => {
    const keyValue = {
      username: 'dummy',
    };

    const results = getDuplicateErrorMessageHelper(keyValue);
    validateStringEquality(results, expectedResult(keyValue.username));
  });
});
