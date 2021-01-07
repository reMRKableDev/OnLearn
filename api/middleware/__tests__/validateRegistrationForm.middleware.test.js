const { CustomValidation } = require('express-validator/src/context-items');
const { validateRegistrationForm } = require('../index');
const {
  validateNotEmpty,
  validateArrayLength,
  validateInstanceOf,
} = require('../../../utils/test-utils/validators.utils');

let validationResults;
describe('validateRegistrationForm Middleware Test Suite', () => {
  beforeEach(() => {
    validationResults = validateRegistrationForm();
  });

  test('should validate incoming object to contain data', () => {
    validateNotEmpty(validationResults);
  });

  test('should validate incoming object to be an Array instance', () => {
    validateInstanceOf(validationResults, Array);
  });

  test('should validate length of validation array', () => {
    validateArrayLength(validationResults, 9);
  });

  test('should validate custom validation for password 2', () => {
    const pwdCustomValidator = validationResults[validationResults.length - 1];

    const { stack } = pwdCustomValidator.builderOrContext;

    validateInstanceOf(stack[0], CustomValidation);
  });
});
