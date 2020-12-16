const usersAuthRouter = require('../users-auth.routes');
const {
  loginUserController,
  renderLoginController,
  registerNewUserController,
  renderRegisterController,
} = require('../../controllers');

const {
  validateNotEmpty,
  validateControllerUsed,
  validateStringEquality,
} = require('../../../utils/test-utils/validators.utils');

describe('Users Router Test Suite', () => {
  test('should validate GET route handler for path /register', () => {
    const { path, stack } = usersAuthRouter.stack[0].route;
    const { handle, method } = stack[0];

    validateNotEmpty(usersAuthRouter.stack[0].route);
    validateStringEquality(path, '/register');
    validateStringEquality(method, 'get');
    validateControllerUsed(handle, renderRegisterController);
  });

  test('should validate POST route handler for path /register', () => {
    const { path, stack } = usersAuthRouter.stack[1].route;
    const { handle, method } = stack[stack.length - 1];

    validateNotEmpty(usersAuthRouter.stack[1].route);
    validateStringEquality(path, '/register');
    validateStringEquality(method, 'post');
    validateStringEquality(handle, registerNewUserController);
  });

  test('should validate GET route handler for path /login', () => {
    const { path, stack } = usersAuthRouter.stack[2].route;
    const { handle, method } = stack[0];

    validateNotEmpty(usersAuthRouter.stack[0].route);
    validateStringEquality(path, '/login');
    validateStringEquality(method, 'get');
    validateControllerUsed(handle, renderLoginController);
  });

  test('should validate POST route handler for path /login', () => {
    const { path, stack } = usersAuthRouter.stack[3].route;
    const { handle, method } = stack[0];

    validateNotEmpty(usersAuthRouter.stack[0].route);
    validateStringEquality(path, '/login');
    validateStringEquality(method, 'post');
    validateControllerUsed(handle, loginUserController);
  });
});
