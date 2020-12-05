const mainControllersObject = require('../index');
const { validateNotEmpty } = require('../../../utils/validators.utils');

describe('All Controllers Test Suite', () => {
  test('should validate that main controller object not empty', () => {
    validateNotEmpty(mainControllersObject);
  });
});
