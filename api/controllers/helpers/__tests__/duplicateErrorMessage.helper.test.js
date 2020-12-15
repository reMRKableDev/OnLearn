const {
  duplicateErrorMessageHelper,
} = require('../duplicateErrorMessage.helper');
const {
  validateNotEmpty,
  validateTypeOfString,
} = require('../../../../utils/test-utils/validators.utils');

describe('duplicateErrorMessage Test Suite', () => {
  test('should validate message is not empty', () => {
    const results = duplicateErrorMessageHelper('dummy');

    validateNotEmpty(results);
    validateTypeOfString(results);
  });
});
