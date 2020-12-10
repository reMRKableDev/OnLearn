const indexRouter = require('../index.routes');
const { renderIndexViewController } = require('../../controllers');

const {
  validateNotEmpty,
  validateControllerUsed,
  validateStringEquality,
} = require('../../../utils/test-utils/validators.utils');

describe('Index Router Test Suite', () => {
  test('should validate router', () => {
    const { path, stack } = indexRouter.stack[0].route;
    const { handle, method } = stack[0];

    validateNotEmpty(indexRouter.stack[0].route);
    validateStringEquality(path, '/');
    validateStringEquality(method, 'get');
    validateControllerUsed(handle, renderIndexViewController);
  });
});
