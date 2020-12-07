const {
  validateRegistrationForm,
} = require('./validateRegistrationForm.middleware');
const { ensureAsyncRoutes } = require('./ensureAsyncRoute.middleware');

module.exports = { validateRegistrationForm, ensureAsyncRoutes };
