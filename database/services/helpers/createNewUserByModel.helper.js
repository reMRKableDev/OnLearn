const { handleAsyncFunction } = require('../../../utils/global-utils');

exports.createNewUserByModelHelper = async (model, requestBody) => {
  const { firstName, lastName, username, email } = requestBody;

  const [results, error] = await handleAsyncFunction(
    model.create({
      firstName,
      lastName,
      username,
      email,
    })
  );

  return results || error;
};
