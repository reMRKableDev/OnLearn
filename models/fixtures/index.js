const {
  dummyRole,
  dummyData,
  dummyEmail,
  dummyPassword,
  dummyUsername,
} = require('../../configs');

exports.fakeClassDataNoLessons = {
  title: dummyData,
  description: dummyData,
  instructor: dummyData,
  imageUrl: dummyData,
  lessons: [],
};

exports.fakeUserDataNoClasses = {
  firstName: dummyData,
  lastName: dummyData,
  username: dummyUsername,
  email: dummyEmail,
  classes: [],
};

exports.fakeUserData = {
  username: dummyUsername,
  email: dummyEmail,
  password: dummyPassword,
  role: dummyRole,
};

exports.fakeUserDataEmptyFields = {
  username: '',
  email: '',
  password: '',
  role: dummyRole,
};
