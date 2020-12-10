const { ensureAsyncRoutes } = require('../index');
const {
  validateNotEmpty,
} = require('../../../utils/test-utils/validators.utils');

describe('Ensure Asynchronous Route Test Suite', () => {
  test('should validate function not empty', () => {
    validateNotEmpty(ensureAsyncRoutes);
  });
});
