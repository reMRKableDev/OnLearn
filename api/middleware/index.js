const { isLoggedInUser } = require('./isLoggedInUser.middleware');
const { ensureAsyncRoutes } = require('./ensureAsyncRoute.middleware');
const { validateLoginForm } = require('./validateLoginForm.middleware');
const {
  validateRegistrationForm,
} = require('./validateRegistrationForm.middleware');

module.exports = {
  isLoggedInUser,
  ensureAsyncRoutes,
  validateLoginForm,
  validateRegistrationForm,
};
