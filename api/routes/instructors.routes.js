const { Router } = require('express');
const { instructorPrefix } = require('../../configs');
const { renderBeInstructorController } = require('../controllers');
const { isLoggedInUser } = require('../middleware');

const router = Router();

router.get(instructorPrefix, isLoggedInUser, renderBeInstructorController);
router.post(instructorPrefix, isLoggedInUser, (req, res) => {
  const { role } = req.user;
  console.log(role);
});

module.exports = router;
