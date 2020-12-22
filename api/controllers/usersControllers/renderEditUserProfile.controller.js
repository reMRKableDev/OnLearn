const {
  findUserByIdService,
} = require('../../../database/services/modelServices/userServices');

exports.renderEditUserProfileController = async (req, res) => {
  const { id } = req.params;

  const isFoundUser = await findUserByIdService(id);
  console.log(isFoundUser);

  res.status(200).render('users/common/edit-profile', isFoundUser);
};
