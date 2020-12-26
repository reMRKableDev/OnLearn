exports.isLoggedInUser = (req, res, next) =>
  req.isAuthenticated() ? next() : res.redirect(302, '/');
