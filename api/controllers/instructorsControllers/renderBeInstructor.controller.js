exports.renderBeInstructorController = (req, res) => {
  const { _id, role, local } = req.user;
  const { email, username, lastName, firstName } = local;

  return role === 'student'
    ? res.status(200).render('users/instructor', {
        _id,
        role,
        email,
        username,
        lastName,
        firstName,
      })
    : res.redirect('/profile');
};
