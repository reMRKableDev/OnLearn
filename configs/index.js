require("dotenv").config();

const { LOCAL_MONGO_URI, SESSION_SECRET } = process.env;

module.exports = {
  apiPrefix: "/api",
  registerPrefix: "/register",
  loginPrefix: "/login",
  logoutPrefix: "/logout",
  localMongoUri: LOCAL_MONGO_URI,
  sessSecret: SESSION_SECRET,
};
