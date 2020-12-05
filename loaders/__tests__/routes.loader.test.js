const routesLoader = require('../routes.loader');
const { validateNotEmpty } = require('../../utils/validators.utils');

describe('Routes Loader Test Suite', () => {
  test('should validate connectDB not empty', () => {
    validateNotEmpty(routesLoader);
  });
});
