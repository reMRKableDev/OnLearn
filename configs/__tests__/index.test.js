const configsObject = require('../index');
const { validateNotEmpty } = require('../../utils/test-utils/validators.utils');

describe('Configuration Test Suite', () => {
  test('should validate configuration object', () => {
    validateNotEmpty(configsObject);
  });
});
