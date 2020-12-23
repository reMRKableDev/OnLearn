const { dummyPassword } = require('../../configs');

exports.fakeCourseData = {
  title: 'Dummy Course',
  description: 'Dummy Description',
  instructors: [],
  modules: [],
};

exports.fakeModuleData = {
  units: [
    {
      title: 'Dummy Unit',
      content: 'Dummy Content',
      videoUrl: 'https://dummy.video.com',
    },
  ],
};

exports.fakeUserData = {
  firstName: 'Dummy',
  lastName: 'User',
  username: 'dummyUser',
  email: 'dummy@user.com',
  password: dummyPassword,
  role: 'instructor',
};

exports.fakeUserDataTwo = {
  firstName: 'Fake',
  lastName: 'User',
  username: 'fakeUser',
  email: 'fake@user.com',
  password: dummyPassword,
  role: 'instructor',
};

exports.fakeUserDataEmptyFields = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
  role: 'student',
};

exports.fakeIdFormatData = {
  correctFormat: '5fe0f5e398cf4637b715db3f',
  incorrectFormat: 'dummy',
};
