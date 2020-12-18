const User = require('../../../database/models/user.model');

exports.changeRoleToInstructor = async (req, res) => {
  const { _id: userId } = req.user;
  const updatedResults = await User.findOneAndUpdate(
    { _id: userId },
    {
      role: 'instructor',
    },
    { upsert: true, new: true }
  );

  return updatedResults
    ? res.redirect('/profile')
    : res.redirect('/instructor');
};
