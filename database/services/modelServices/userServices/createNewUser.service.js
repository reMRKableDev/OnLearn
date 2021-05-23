const User = require('../../../models/user.model');
const {
  handleAsyncFunction,
  ensureDataInVulnerableOfInjectionAttacks,
} = require('../../../../utils/global-utils');
const { hashPasswordHelper } = require('../../helpers');

exports.createNewUserService = async (requestBody) => {
  const secureRequestBody = ensureDataInVulnerableOfInjectionAttacks(
    requestBody
  );

  const {
    firstName,
    lastName,
    email,
    username,
    password,
    role,
  } = secureRequestBody;

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
