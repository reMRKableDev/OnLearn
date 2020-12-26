const { hashPasswordHelper } = require('../../../database/services/helpers');
const User = require('../../../database/models/user.model');

exports.updateUserProfile = async (req, res) => {
  const { local } = req.user;
  const { id } = req.params;
  const {
    email,
    firstName,
    lastName,
    username,
    password,
    existingImage,
  } = req.body;

  // TODO: Password confirmation needs to be in place.

  const userPassword = !password
    ? local.password
    : await hashPasswordHelper(password);

  const profilePictureUrl = req.file ? req.file.path : existingImage;

  // TODO: Make this a service
  await User.findByIdAndUpdate(
    id,
    {
      profilePictureUrl,
      local: { email, username, firstName, lastName, password: userPassword },
    },
    { upsert: true, new: true }
  );

  res.redirect(302, '/profile');
};
