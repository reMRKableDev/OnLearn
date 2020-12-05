const mainControllersObject = require('../index');
const { validateNotEmpty } = require('../../../utils/validators.utils');

describe('Main Controller Object Test Suite', () => {
  test('should validate that main controller object', () => {
    validateNotEmpty(mainControllersObject);
  });
});
