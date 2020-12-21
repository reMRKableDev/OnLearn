exports.renderIndexViewController = (_req, res) =>
  res.status(200).render('index', { title: 'Express' });
