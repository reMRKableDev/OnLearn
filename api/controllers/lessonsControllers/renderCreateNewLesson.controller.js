exports.renderCreateNewLessonController = (req, res) => {
  const { local } = req.user;
  const { id } = req.params;

  res.status(200).render('users/instructors/new-lesson', { local, id });
};
