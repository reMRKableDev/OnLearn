const usersAuthRouter = require('../users-auth.routes');
const {
  createNewUserController,
  renderRegisterController,
} = require('../../controllers');

const {
  validateNotEmpty,
  validateControllerUsed,
  validateStringEquality,
} = require('../../../utils/test-utils/validators.utils');

describe('Users Router Test Suite', () => {
  test('should validate GET route handler', () => {
    const { path, stack } = usersAuthRouter.stack[0].route;
    const { handle, method } = stack[0];

    validateNotEmpty(usersAuthRouter.stack[0].route);
    validateStringEquality(path, '/register');
    validateStringEquality(method, 'get');
    validateControllerUsed(handle, renderRegisterController);
  });

  test('should validate POST route handler', () => {
    const { path, stack } = usersAuthRouter.stack[1].route;
    const { handle, method } = stack[stack.length - 1];

    validateNotEmpty(usersAuthRouter.stack[1].route);
    validateStringEquality(path, '/register');
    validateStringEquality(method, 'post');
    validateStringEquality(handle, createNewUserController);
  });
});
