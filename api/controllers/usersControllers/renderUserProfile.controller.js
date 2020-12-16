exports.renderUserProfileController = (req, res) => {
  const { _id, role, email, username, lastName, firstName, classes } = req.user;
  res.status(200).render('users/profile', {
    _id,
    role,
    email,
    username,
    lastName,
    firstName,
    classes,
  });
};
