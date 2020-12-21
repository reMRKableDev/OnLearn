const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const { googleAuth } = require('../configs');
const User = require('../database/models/user.model');
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

      // TODO: MAKE into a service
      const [newGoogleUser, googleError] = await handleAsyncFunction(
        User.create({
          local: {
            email: profile.emails[0].value.toLocaleLowerCase(),
            username: profile.displayName,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
          },
          google: {
            id: profile.id,
            token: accessToken,
            name: profile.displayName,
            email: profile.emails[0].value.toLocaleLowerCase(),
          },
          profilePictureUrl: profile.photos[0].value,
        })
      );

      if (googleError) {
        return done(googleError);
      }

      return done(null, newGoogleUser);
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
