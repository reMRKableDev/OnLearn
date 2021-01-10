const Course = require('../course.model');
const User = require('../user.model');
const {
  fakeUserData,
  fakeUserDataTwo,
  fakeCourseData,
} = require('../../fixtures');
const {
  validateNotEmpty,
  validateArrayLength,
  validateStringEquality,
  validateArrayContaining,
} = require('../../../utils/test-utils/validators.utils');
const {
  dbConnect,
  dbDisconnect,
} = require('../../../utils/test-utils/dbHandler.utils');

let validCourse;
let validStudentUser;
let validInstructorUser;

describe('Course Model Test Suite', () => {
  beforeAll(async () => {
    await dbConnect();

    validInstructorUser = await User.create({
      local: fakeUserData,
      role: fakeUserData.role,
    });

    validStudentUser = await User.create({
      local: fakeUserDataTwo,
      role: fakeUserDataTwo.role,
    });

    const { _id: instructorId } = validInstructorUser;
    const { _id: studentId } = validStudentUser;

    fakeCourseData.instructors.push(instructorId);
    fakeCourseData.students.push(studentId);

    validCourse = await Course.create(fakeCourseData);
  });

  afterAll(async () => dbDisconnect());

  test('should validate Course successfully saved', async () => {
    validateNotEmpty(validCourse);

    const { _id: validStudentId } = validStudentUser;
    const { _id: validInstructorId } = validInstructorUser;

    const { imageUrl, title, description, instructors, students } = validCourse;

    validateStringEquality(imageUrl, 'https://via.placeholder.com/200x150');
    validateStringEquality(title, fakeCourseData.title);
    validateStringEquality(description, fakeCourseData.description);
    validateArrayLength(instructors, 1);
    validateArrayContaining(instructors, [validInstructorId]);
    validateArrayLength(students, 1);
    validateArrayContaining(students, [validStudentId]);
  });
});
