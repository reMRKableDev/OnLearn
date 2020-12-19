const User = require('../../../models/user.model');
const {
  handleAsyncFunction,
} = require('../../../../utils/global-utils/handleAsyncFunction.utils');

exports.updateUserRoleService = async (userId) => {
  const [updateResults, updateError] = await handleAsyncFunction(
    User.findOneAndUpdate(
      { _id: userId },
      {
        role: 'instructor',
      },
      { upsert: true, new: true }
    )
  );

  return updateResults || updateError;
};
