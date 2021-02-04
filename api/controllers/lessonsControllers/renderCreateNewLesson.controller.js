exports.renderCreateNewLessonController = (req, res) =>
  res.status(200).render('users/instructors/new-lesson', req.user);
