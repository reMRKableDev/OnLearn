const User = require('../../../models/user.model');
const {
  handleAsyncFunction,
} = require('../../../../utils/global-utils/handleAsyncFunction.utils');

exports.updateUserProfileDataService = async (
  id,
  requestBody,
  userPassword,
  profilePictureUrl
) => {
  const { email, username, firstName, lastName } = requestBody;

  const [updateResults, updateError] = await handleAsyncFunction(
    User.findByIdAndUpdate(
      id,
      {
        profilePictureUrl,
        local: { email, username, firstName, lastName, password: userPassword },
      },
      { upsert: true, new: true }
    )
  );

  return updateResults || updateError;
};
