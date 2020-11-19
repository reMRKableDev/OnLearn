const { Router } = require('express');
const { renderIndexViewController } = require('../controllers');

const router = Router();

router.get('/', renderIndexViewController);

module.exports = router;
