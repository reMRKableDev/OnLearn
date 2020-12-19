const {
  updateUserRoleService,
} = require('../../../database/services/modelServices/userServices');

exports.changeRoleToInstructor = async (req, res) => {
  const { _id: userId } = req.user;
  const updatedResults = await updateUserRoleService(userId);

  if (updatedResults instanceof Error) {
    res.status(500).render('error', {
      message:
        'Oops! An unexpected error seems to have occurred while processing your request.',
      error: {
        status: '500',
        stack: `We're sorry for the trouble. We've been notified and will correct this as soon as possible. Please try your request again after a little while`,
      },
    });
    return;
  }

  res.redirect('/profile');
};
