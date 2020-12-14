const User = require('../../../models/user.model');
const {
  handleAsyncFunction,
} = require('../../../../utils/global-utils/handleAsyncFunction.utils');

const { hashPasswordHelper } = require('../../helpers');

exports.createNewUserService = async (requestBody) => {
  const { email, username, password, role } = requestBody;

  const isHashedPassword = await hashPasswordHelper(password);

  const [results, error] = await handleAsyncFunction(
    User.create({ email, username, password: isHashedPassword, role })
  );

  return results || error;
};
