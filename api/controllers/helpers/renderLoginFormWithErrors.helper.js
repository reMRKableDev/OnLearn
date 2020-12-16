exports.renderLoginFormWithErrorsHelper = (response, user, password) =>
  response.status(400).render('users/login', {
    user,
    password,
    message: 'Please fill in all the fields!',
  });
