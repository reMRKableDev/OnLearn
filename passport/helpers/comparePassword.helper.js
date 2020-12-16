const bcrypt = require('bcrypt');
const { handleAsyncFunction } = require('../../utils/global-utils');

exports.comparePasswordHelper = async (password, passwordToCompare) => {
  const [results, error] = await handleAsyncFunction(
    bcrypt.compare(password, passwordToCompare)
  );

  return results || error;
};
