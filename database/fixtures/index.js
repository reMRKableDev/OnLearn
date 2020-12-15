const { dummyPassword } = require('../../configs');

exports.fakeClassDataNoLessons = {
  title: 'Dummy Class',
  description: 'Dummy Description',
  instructor: 'Dummy Instructor',
  imageUrl: 'http://dummy.image.com',
  lessons: [],
};

exports.fakeUserDataNoClasses = {
  firstName: 'Dummy',
  lastName: 'User',
  username: 'dummyUser',
  email: 'dummy@user.com',
  classes: [],
};

exports.fakeUserData = {
  firstName: 'Dummy',
  lastName: 'User',
  username: 'dummyUser',
  email: 'dummy@user.com',
  password: dummyPassword,
  role: 'student',
};

exports.fakeUserDataEmptyFields = {
  username: '',
  email: '',
  password: '',
  role: 'student',
};
