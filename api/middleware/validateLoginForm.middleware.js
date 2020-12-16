const { check } = require('express-validator');

exports.validateLoginForm = () => [
  check('user') &&
    check('password').notEmpty().withMessage('Please fill in all fields!'),
  /* check('password').notEmpty().withMessage('Please fill in all fields!'), */
];
