const { updateUserProfile } = require('./updateUserProfile.controller');
const {
  renderUserProfileController,
} = require('./renderUserProfile.controller');
const {
  renderEditUserProfileController,
} = require('./renderEditUserProfile.controller');

module.exports = {
  updateUserProfile,
  renderUserProfileController,
  renderEditUserProfileController,
};
