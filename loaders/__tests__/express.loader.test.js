const app = require('../express.loader');
const {
  validateNotEmpty,
  validateArrayLength,
  validateStringEquality,
  validateArrayContaining,
} = require('../../utils/validators.utils');

describe('Express Loaders Test Suite', () => {
  test(`should validate that loaded object isn't empty`, () => {
    validateNotEmpty(app);
  });

  test('should validate the view engine to be hbs', () => {
    const { settings } = app.locals;
    const viewEngine = settings['view engine'];

    validateNotEmpty(viewEngine);
    validateStringEquality(viewEngine, 'hbs');
  });

  test('should validate middleware set to router', () => {
    const { _router } = app;
    const { stack } = _router;
    const receivedStackLayerNames = stack.map((element) => element.name);
    const expectedStackLayerNames = [
      'query',
      'expressInit',
      'logger',
      'cookieParser',
      'jsonParser',
      'urlencodedParser',
      'serveStatic',
      'session',
    ];

    validateNotEmpty(stack);
    validateArrayLength(stack, 10);
    validateArrayContaining(receivedStackLayerNames, expectedStackLayerNames);
  });
});
