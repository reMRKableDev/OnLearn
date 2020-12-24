const {
  findUserByIdService,
} = require('../../../database/services/modelServices/userServices');
const { checkIfValidObjectIdHelper } = require('../helpers');

exports.renderEditUserProfileController = async (req, res) => {
  const { id } = req.params;

  const isValidObjectId = checkIfValidObjectIdHelper(id);

  if (!isValidObjectId) {
    req.flash('error_msg', 'Wrong format on the user ID');
    res.redirect('/profile');
    return;
  }

  const isFoundUser = await findUserByIdService(id);

  if (isFoundUser === null) {
    req.flash('error_msg', `A user with this ID doesn't exist!`);
    res.redirect('/profile');
    return;
  }

  res.status(200).render('users/common/edit-profile', isFoundUser);
};
