exports.isInstructor = (req, res, next) => {
  const { role } = req.user;

  const noAccessMessage = () => {
    req.flash('error_msg', 'Only instructors can access this route');
    res.redirect(302, '/');
  };

  return role === 'instructor' ? next() : noAccessMessage();
};
