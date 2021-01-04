exports.renderIndexViewController = (req, res) =>
  req.user
    ? res.status(200).render('index', {
        title: 'Express',
        local: { username: req.user.local.username },
      })
    : res.status(200).render('index', { title: 'Express' });
