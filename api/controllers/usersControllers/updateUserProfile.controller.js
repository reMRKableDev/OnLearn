const User = require('../../../database/models/user.model');

exports.updateUserProfile = (req, res) => {
  const { id } = req.params;
  const { email, firstName, lastName, username, existingImage } = req.body;

  console.log(req);

  const profilePictureUrl = req.file ? req.file.path : existingImage;
  console.log(profilePictureUrl);

  /*   const results = await User.findByIdAndUpdate(
    id,
    {
      profilePictureUrl,
      local: { email, username, firstName, lastName },
    },
    { upsert: true, new: true }
  );

  console.log(results);

  res.redirect('/profile'); */
};
