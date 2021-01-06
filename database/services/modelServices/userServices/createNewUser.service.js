const User = require('../../../models/user.model');
const {
  handleAsyncFunction,
} = require('../../../../utils/global-utils/handleAsyncFunction.utils');
const { hashPasswordHelper } = require('../../helpers');

exports.createNewUserService = async (requestBody) => {
  const { firstName, lastName, email, username, password, role } = requestBody;

  const isHashedPassword = await hashPasswordHelper(password);

  const [results, error] = await handleAsyncFunction(
    User.create({
      role,
      local: {
        email,
        username,
        lastName,
        firstName,
        password: isHashedPassword,
      },
    })
  );

  return results || error;
};
