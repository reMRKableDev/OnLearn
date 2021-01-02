const {
  render500ErrorHelper,
  handleUpdatedPasswordHelper,
} = require('../helpers');
const {
  updateUserProfileDataService,
} = require('../../../database/services/modelServices/userServices');

const strongPasswordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

exports.updateUserProfileController = async (req, res) => {
  const { local } = req.user;
  const { id } = req.params;
  const { password, password2, existingImage } = req.body;

  if (password !== password2) {
    req.flash('error_msg', `Passwords do not match`);
    res.redirect(302, `/profile/${id}/edit`);
    return;
  }

  if (!strongPasswordRegex.test(password)) {
    req.flash(
      'error_msg',
      'Password needs to have at least 6 chars and must contain at least one number, one lowercase and one uppercase letter.'
    );
    res.redirect(302, `/profile/${id}/edit`);
    return;
  }

  const userPassword = password
    ? await handleUpdatedPasswordHelper(password, res)
    : local.password;

  const profilePictureUrl = req.file ? req.file.path : existingImage;

  const isUpdatedUserProfile = await updateUserProfileDataService(
    id,
    req.body,
    userPassword,
    profilePictureUrl
  );

  if (isUpdatedUserProfile instanceof Error) {
    render500ErrorHelper(res);
    return;
  }

  res.redirect(302, '/profile');
};
