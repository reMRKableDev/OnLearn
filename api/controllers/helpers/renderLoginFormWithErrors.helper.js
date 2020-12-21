exports.renderLoginFormWithErrorsHelper = (response, user, password) =>
  response.status(400).render('users/auth/login', {
    user,
    password,
    message: 'Please fill in all the fields!',
  });
