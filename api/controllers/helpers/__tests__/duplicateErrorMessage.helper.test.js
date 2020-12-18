const {
  duplicateErrorMessageHelper,
} = require('../duplicateErrorMessage.helper');
const {
  validateNotEmpty,
  validateTypeOf,
} = require('../../../../utils/test-utils/validators.utils');

describe('duplicateErrorMessage Test Suite', () => {
  test('should validate message is not empty', () => {
    const results = duplicateErrorMessageHelper('dummy');

    validateNotEmpty(results);
    validateTypeOf(results, 'string');
  });
});
