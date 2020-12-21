exports.renderUserProfileController = (req, res) => {
  const { _id, role, local } = req.user;
  const { email, username, lastName, firstName, classes } = local;
  res.status(200).render('users/common/profile', {
    _id,
    role,
    email,
    username,
    lastName,
    firstName,
    classes,
  });
};
