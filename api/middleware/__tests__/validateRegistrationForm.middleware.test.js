const { validateRegistrationForm } = require('../index');

describe('Middleware Test Suite', () => {
  test('should validate', () => {
    expect(validateRegistrationForm instanceof Function).toBe(true);
  });
});
