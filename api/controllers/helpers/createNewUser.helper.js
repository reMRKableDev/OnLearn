const { handleIfAsyncErrorHelper } = require('./handleIfAsyncError.helper');
const { isString } = require('../../../utils/global-utils');
const {
  createNewUserService,
} = require('../../../database/services/userServices');

exports.createNewUserHelper = async (requestBody, response) => {
  const isNewUser = await createNewUserService(requestBody);

  const handledResults = handleIfAsyncErrorHelper(isNewUser);

  return isString(handledResults)
    ? response.status(409).send(handledResults)
    : response.status(200).send(handledResults);

    // todo: save new student & instructor

  /* isNewUser.role.match(/student/i)
    ? console.log('Time to make a student user')
    : console.log('Time to make an instructor user'); */
};
