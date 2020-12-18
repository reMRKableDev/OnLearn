const { handleAsyncFunction } = require('../index');
const {
  validateNotEmpty,
  validateUndefined,
  validateTypeOf,
} = require('../../test-utils/validators.utils');

const doSomethingAsync = (promiseState) =>
  new Promise((resolve, reject) =>
    promiseState
      ? resolve('Async Promise resolved')
      : reject(new Error('Async Promise rejected'))
  );

describe('Handle Async Functions Test Suite', () => {
  test('should validate handleAsyncFunction as typeof function', () => {
    validateTypeOf(handleAsyncFunction, 'function');
  });

  test('should validate handleAsyncFunction returns error', async () => {
    const [results, error] = await handleAsyncFunction(doSomethingAsync(false));

    validateUndefined(results);
    validateNotEmpty(error);
  });

  test('should validate handleAsyncFunction returns results', async () => {
    const [results, error] = await handleAsyncFunction(doSomethingAsync(true));

    validateNotEmpty(results);
    validateUndefined(error);
  });
});
