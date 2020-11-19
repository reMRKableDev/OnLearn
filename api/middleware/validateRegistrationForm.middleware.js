const { check } = require('express-validator');

exports.validateRegistrationForm = () => [
  check('firstName').notEmpty().withMessage('Please provide your First Name.'),
  check('lastName').notEmpty().withMessage('Please provide your Last Name.'),
  check('email').normalizeEmail(),
  check('email').notEmpty().withMessage('Please provide your Email.'),
  check('email')
    .isEmail()
    .withMessage("Please use correct Email format, 'foo@bar.com'."),
  check('username').notEmpty().withMessage('Please provide your Username.'),
  check('password').notEmpty().withMessage('Please provide a Password.'),
  check('password')
    .isLength({ min: 6 })
    .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/)
    .withMessage(
      'Password needs to have at least 6 chars and must contain at least one number, one lowercase and one uppercase letter.'
    ),
  check('password2').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Password confirmation does not match password');
    }
    return true;
  }),
];
