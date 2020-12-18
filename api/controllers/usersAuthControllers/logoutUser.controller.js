exports.logoutUserController = (req, res) => {
  req.logout();
  req.session.destroy(() => {
    res.status(200).redirect('/');
  });
};
