exports.renderMyCoursesController = (req, res) =>
  res.status(200).render('users/common/my-courses', req.user);
