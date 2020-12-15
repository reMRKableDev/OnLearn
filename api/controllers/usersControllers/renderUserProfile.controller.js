exports.renderUserProfileController = (req, res) =>
  res.status(200).render('users/profile', req.user);
