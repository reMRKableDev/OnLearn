exports.render500ErrorHelper = (response) =>
  response.status(500).render('error', {
    message:
      'Oops! An unexpected error seems to have occurred while processing your request.',
    error: {
      status: '500',
      stack: `We're sorry for the trouble. We've been notified and will correct this as soon as possible. Please try your request again after a little while`,
    },
  });
