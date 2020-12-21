exports.setUserInSessionAndLoginHelper = (
  request,
  isHandledResults,
  response
) =>
  request.login(isHandledResults, (err) => {
    if (err) {
      response.status(500).render('users/auth/register', {
        message: 'Login after signup went bad.',
      });
      return;
    }

    request.flash('success_msg', 'New User Added');
    response.redirect('/profile');
  });
