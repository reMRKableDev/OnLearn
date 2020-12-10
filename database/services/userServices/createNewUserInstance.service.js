const User = require('../../models/user.model');
const {
  handleAsyncFunction,
} = require('../../../utils/global-utils/handleAsyncFunction.utils');

exports.createNewUserService = async (requestBody) => {
  const { email, username, password, role } = requestBody;

  const [results, error] = await handleAsyncFunction(
    User.create({ email, username, password, role })
  );

  return results || error;
};
