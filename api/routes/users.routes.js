const { Router } = require('express');
const { profilePrefix } = require('../../configs');

const router = Router();

router.get(profilePrefix, (req, res) => {
  res.status(200).render('users/profile', req.user);
});

module.exports = router;
