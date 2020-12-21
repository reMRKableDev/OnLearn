const { handleIfAsyncErrorHelper } = require('./handleIfAsyncError.helper');
const {
  setUserInSessionAndLoginHelper,
} = require('./setUserInSessionAndLogin.helper');
const { isString } = require('../../../utils/global-utils');
const {
  createNewUserService,
} = require('../../../database/services/modelServices/userServices');

exports.createNewUserHelper = async (request, response) => {
  const isNewUser = await createNewUserService(request.body);

  const isHandledResults = handleIfAsyncErrorHelper(isNewUser);

  if (isString(isHandledResults)) {
    response
      .status(409)
      .render('users/auth/register', { message: isHandledResults });
    return;
  }

  setUserInSessionAndLoginHelper(request, isHandledResults, response);
};
