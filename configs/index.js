require('dotenv').config();

const {
  LOCAL_MONGO_URI,
  SESSION_SECRET,
  DUMMY_DATA,
  DUMMY_USERNAME,
  DUMMY_EMAIL,
  DUMMY_PASSWORD,
  DUMMY_ROLE,
} = process.env;

module.exports = {
  /* Route prefixes */
  apiPrefix: '/',
  registerPrefix: '/register',
  loginPrefix: '/login',
  logoutPrefix: '/logout',

  /* Database  */
  localMongoUri: LOCAL_MONGO_URI,
  sessSecret: SESSION_SECRET,

  /* Test Fixture Data */
  dummyData: DUMMY_DATA,
  dummyUsername: DUMMY_USERNAME,
  dummyEmail: DUMMY_EMAIL,
  dummyPassword: DUMMY_PASSWORD,
  dummyRole: DUMMY_ROLE,
};
