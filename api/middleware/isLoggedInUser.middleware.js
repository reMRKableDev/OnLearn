exports.isLoggedInUser = (req, res, next) =>
  req.user ? next() : res.redirect('/');
