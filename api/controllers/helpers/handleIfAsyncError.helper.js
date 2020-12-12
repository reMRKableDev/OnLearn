const {
  getDuplicateErrorMessageHelper,
} = require('./getDuplicateErrorMessage.helper');

exports.handleIfAsyncErrorHelper = (incomingObject) => {
  let handleResults;

  if (incomingObject instanceof Error) {
    if (incomingObject.code === 11000) {
      handleResults = getDuplicateErrorMessageHelper(incomingObject.keyValue);
    }
  } else {
    handleResults = incomingObject;
  }
  return handleResults;
};
