const Lesson = require('../lesson.model');
const Course = require('../course.model');
const User = require('../user.model');

const {
  fakeUserData,
  fakeCourseData,
  fakeLessonData,
} = require('../../fixtures');
const {
  validateNotEmpty,
  validateEquality,
  validateObjectMatch,
  validateArrayLength,
  validateStringEquality,
  validateArrayContaining,
} = require('../../../utils/test-utils/validators.utils');
const {
  dbConnect,
  dbDisconnect,
} = require('../../../utils/test-utils/dbHandler.utils');

let validCourse;
let validLesson;
let validInstructor;

describe('Lesson Model Test Suite', () => {
  beforeAll(async () => {
    await dbConnect();

    validInstructor = await User.create({
      local: fakeUserData,
      role: fakeUserData.role,
    });

    const { _id: instructorId } = validInstructor;

    fakeCourseData.instructors.push(instructorId);

    validCourse = await Course.create(fakeCourseData);

    validLesson = await Lesson.create(fakeLessonData);
  });

  afterAll(async () => dbDisconnect());

  test('should validate Lesson created & saved', () => {
    const { _id: lessonId } = validLesson;

    validCourse.lessons.push(lessonId);

    validateNotEmpty(validLesson);
    validateObjectMatch(validLesson, fakeLessonData);

    validateNotEmpty(validCourse.lessons);
    const { lessons } = validCourse;

    validateNotEmpty(lessons);

    validateArrayLength(lessons, 1);
    validateStringEquality(lessons[0], lessonId);
  });
});
