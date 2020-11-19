exports.renderRegistrationFormWithErrorsHelper = (resObj, reqBody, errObj) => {
  const { firstName, lastName, email, username, password } = reqBody;

  resObj.status(400).render('user/signup', {
    firstName,
    lastName,
    email,
    username,
    password,
    errors: errObj.array(),
  });
};
