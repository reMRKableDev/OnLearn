const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const { googleAuth } = require('../configs');
const User = require('../database/models/user.model');
const {
  createNewGoogleUserService,
} = require('../database/services/modelServices/userServices');
const { handleAsyncFunction } = require('../utils/global-utils');

exports.googleAuthStrategy = new GoogleStrategy(
  {
    clientID: googleAuth.clientId,
    clientSecret: googleAuth.clientSecret,
    callbackURL: googleAuth.callbackUrl,
    passReqToCallback: true,
  },
  async (req, accessToken, _refreshToken, profile, done) => {
    // Check if user is logged in
    if (!req.user) {
      const [userResults, error] = await handleAsyncFunction(
        User.findOne({ 'google.id': profile.id })
      );

      if (error) {
        return done(error);
      }

      if (userResults) {
        // if there is a user id already but no token (user was linked at one point and then removed)
        if (!userResults.google.token) {
          userResults.google.token = accessToken;
          userResults.google.name = profile.displayName;
          userResults.google.email = profile.emails[0].value.toLocaleLowerCase();
          userResults.profilePictureUrl = profile.photos[0].value;

          const [updatedUserResults, saveError] = await handleAsyncFunction(
            userResults.save()
          );

          if (saveError) {
            return done(saveError);
          }

          return done(null, updatedUserResults);
        }

        return done(null, userResults);
      }

      const isGoogleUser = await createNewGoogleUserService(
        profile,
        accessToken
      );


      if (isGoogleUser instanceof Error) {
        return done(isGoogleUser);
      }

      return done(null, isGoogleUser);
    }

    // user already exists and is logged in, we have to link accounts
    const { user } = req;

    user.google.id = profile.id;
    user.google.token = accessToken;
    user.google.name = profile.displayName;
    user.google.email = (profile.emails[0].value || '').toLocaleLowerCase();
    user.profilePictureUrl = profile.photos[0].value || '';

    const [updatedUser, updateError] = await handleAsyncFunction(user.save());

    if (updateError) {
      return done(updateError);
    }

    return done(null, updatedUser);
  }
);
