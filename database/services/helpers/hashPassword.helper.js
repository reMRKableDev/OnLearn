const bcrypt = require('bcrypt');
const { handleAsyncFunction } = require('../../../utils/global-utils');

const saltRounds = 10;

exports.hashPasswordHelper = async (userPassword) => {
  const [results, error] = await handleAsyncFunction(
    bcrypt.hash(userPassword, saltRounds)
  );

  return results || error;
};
