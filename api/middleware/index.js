const { isInstructor } = require('./isInstructor.middleware');
const { isLoggedInUser } = require('./isLoggedInUser.middleware');
const {
  validateRegistrationForm,
} = require('./validateRegistrationForm.middleware');

module.exports = {
  isInstructor,
  isLoggedInUser,
  validateRegistrationForm,
};
