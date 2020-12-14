const { handleIfAsyncErrorHelper } = require('./handleIfAsyncError.helper');
const { saveNewUserByRoleHelper } = require('./saveNewUserByRole.helper');
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

  const isNewUserByRole = await saveNewUserByRoleHelper(request.body);

  // todo: add user to session
  // todo: redirect to route that renders profile

  console.log('REQUEST OBJECT', request);

  request.login(isNewUserByRole, (err) => {
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
