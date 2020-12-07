exports.ensureAsyncRoutes = (route) => (req, res, next = console.error) =>
  Promise.resolve(route(req, res)).catch(next);
