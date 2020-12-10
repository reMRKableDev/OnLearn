exports.renderRegistrationFormWithErrorsHelper = (
  response,
  requestBody,
  error
) => {
  const { firstName, lastName, email, username, password } = requestBody;

  response.status(400).render('users/register', {
    firstName,
    lastName,
    email,
    username,
    password,
    errors: error.array(),
  });
};
