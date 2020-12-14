const { handleIfAsyncErrorHelper } = require('./handleIfAsyncError.helper');
const { isString } = require('../../../utils/global-utils');
const {
  createNewUserService,
} = require('../../../database/services/modelServices/userServices');

exports.createNewUserHelper = async (request, response) => {
  const isNewUser = await createNewUserService(request.body);

  const isHandledResults = handleIfAsyncErrorHelper(isNewUser);

  if (isString(isHandledResults)) {
    response.status(409).send(isHandledResults);
    return;
  }

  // todo: add user to session
  // todo: redirect to route that renders profile

  request.login(isHandledResults, (err) => {
    if (err) {
      response
        .status(500)
        .render('users/register', { message: 'Login after signup went bad.' });
      return;
    }

    request.flash('success_msg', 'New User Added');
    response.redirect(`/profile/${request.user.username}`);
  });
};
