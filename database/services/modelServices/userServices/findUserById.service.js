const User = require('../../../models/user.model');
const {
  handleAsyncFunction,
} = require('../../../../utils/global-utils/handleAsyncFunction.utils');

exports.findUserByIdService = async (id) => {
  const [userResults, userError] = await handleAsyncFunction(User.findById(id));

  return userResults || userError;
};
