exports.isLoggedInUser = (req, res, next) =>
  req.isAuthenticated() ? next() : res.status(200).redirect('/');
