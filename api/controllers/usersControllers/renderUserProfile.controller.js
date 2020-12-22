exports.renderUserProfileController = (req, res) => {
  const { _id, role, local, profilePictureUrl } = req.user;
  res.status(200).render('users/common/profile', {
    _id,
    role,
    local,
    profilePictureUrl,
  });
};
