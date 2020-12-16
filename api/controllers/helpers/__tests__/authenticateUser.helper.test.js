const { authenticateUserHelper } = require('../authenticateUser.helper');
const {
  validateNotEmpty,
} = require('../../../../utils/test-utils/validators.utils');

describe('authenticateUser Helper Test Suite', () => {
  test('should validate not empty', () => {
    validateNotEmpty(authenticateUserHelper);
  });
});
