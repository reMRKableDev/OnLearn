exports.renderIndexViewController = (_, res) =>
  res.status(200).render('index', { title: 'Express' });
