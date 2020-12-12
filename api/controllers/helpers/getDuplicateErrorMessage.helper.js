const {
  duplicateErrorMessageHelper,
} = require('./duplicateErrorMessage.helper');

exports.getDuplicateErrorMessageHelper = (keyValue) =>
  keyValue.email
    ? duplicateErrorMessageHelper(keyValue.email)
    : duplicateErrorMessageHelper(keyValue.username);
