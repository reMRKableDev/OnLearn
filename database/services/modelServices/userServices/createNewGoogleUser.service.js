const User = require('../../../models/user.model');
const {
  handleAsyncFunction,
} = require('../../../../utils/global-utils/handleAsyncFunction.utils');

exports.createNewGoogleUserService = async (googleProfileData, accessToken) => {
  const [googleResults, googleError] = await handleAsyncFunction(
    User.create({
      local: {
        email: googleProfileData.emails[0].value.toLocaleLowerCase(),
        username: googleProfileData.displayName,
        firstName: googleProfileData.name.givenName,
        lastName: googleProfileData.name.familyName,
      },
      google: {
        id: googleProfileData.id,
        token: accessToken,
        name: googleProfileData.displayName,
        email: googleProfileData.emails[0].value.toLocaleLowerCase(),
      },
      profilePictureUrl: googleProfileData.photos[0].value,
    })
  );

  return googleResults || googleError;
};
