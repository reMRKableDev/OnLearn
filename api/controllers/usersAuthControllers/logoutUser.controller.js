exports.logoutUserController = (req, res) => {
  req.logout();
  req.session.destroy(() => res.redirect(302, '/'));
};
