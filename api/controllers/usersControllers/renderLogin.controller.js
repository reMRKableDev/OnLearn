exports.renderLoginController = (req, res) => {
  const [message] = req.flash('message');
  res.status(200).render('users/login', { message });
};
