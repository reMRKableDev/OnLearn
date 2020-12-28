const { hashPasswordHelper } = require('../../../database/services/helpers');
const { render500ErrorHelper } = require('./render500Error.helper');

exports.handleUpdatedPasswordHelper = async (newPassword, response) => {
  const isHashedPassword = await hashPasswordHelper(newPassword);

  return isHashedPassword instanceof Error
    ? render500ErrorHelper(response)
    : isHashedPassword;
};
