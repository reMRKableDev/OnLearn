const {
  updateUserRoleService,
} = require('../../../database/services/modelServices/userServices');
const { render500ErrorHelper } = require('../helpers');

exports.changeRoleToInstructor = async (req, res) => {
  const { _id: userId } = req.user;
  const updatedResults = await updateUserRoleService(userId);

  if (updatedResults instanceof Error) {
    render500ErrorHelper(res);
    return;
  }

  res.redirect('/profile');
};
