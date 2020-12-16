exports.logoutUserController = (req, res) => {
  req.logout();
  res.redirect('/');
};
