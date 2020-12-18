const { Router } = require('express');
const { instructorPrefix } = require('../../configs');
const {
  changeRoleToInstructor,
  renderBeInstructorController,
} = require('../controllers');
const { isLoggedInUser } = require('../middleware');

const router = Router();

router.get(instructorPrefix, isLoggedInUser, renderBeInstructorController);
router.post(instructorPrefix, isLoggedInUser, changeRoleToInstructor);

module.exports = router;
