const User = require('../../models/user.model');

exports.createNewUserInstanceService = async (requestBody) => {
  try {
    return await new User({
      email: requestBody.email,
      username: requestBody.username,
      password: requestBody.password,
      role: requestBody.role,
    });
  } catch (error) {
    return error;
  }
};
