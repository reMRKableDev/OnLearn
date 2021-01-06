const { Router } = require('express');
const { myCoursesPrefix } = require('../../configs');
const { renderMyCoursesController } = require('../controllers');
const { isLoggedInUser } = require('../middleware');

const router = Router();

router.get(myCoursesPrefix, isLoggedInUser, renderMyCoursesController);

module.exports = router;
