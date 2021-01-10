exports.renderCreateNewCourseController = (req, res) =>
  res.status(200).render('users/instructors/new-course', req.user);
