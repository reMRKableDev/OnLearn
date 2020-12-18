const Course = require('../course.model');
const User = require('../user.model');
const {
  fakeUserData,
  fakeModuleData,
  fakeCourseData,
  fakeUserDataTwo,
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

let validUser;
let validCourse;
describe('Course Model Test Suite', () => {
  beforeAll(async () => {
    await dbConnect();

    validUser = await User.create({
      local: fakeUserData,
      role: fakeUserData.role,
    });

    const { _id } = validUser;
    fakeCourseData.instructors.push(_id);

    validCourse = await Course.create(fakeCourseData);
  });

  afterAll(async () => dbDisconnect());

  test('should validate Course with no modules successfully saved', async () => {
    validateNotEmpty(validCourse);

    const { _id: userId } = validUser;
    const {
      _id: courseId,
      imageUrl,
      title,
      description,
      instructors,
      modules,
    } = validCourse;

    validateStringEquality(courseId, expect.anything());
    validateStringEquality(imageUrl, 'https://placeholder.com/300');
    validateStringEquality(title, fakeCourseData.title);
    validateStringEquality(description, fakeCourseData.description);
    validateArrayLength(instructors, 1);
    validateArrayContaining(instructors, [userId]);
    validateArrayLength(modules, 0);
  });

  test('should validate Course with single module successfully saved', async () => {
    validateNotEmpty(validCourse);
    validCourse.modules.push(fakeModuleData);

    const { modules } = validCourse;

    validateArrayLength(modules, 1);

    const { units } = modules[0];
    const { title, content, videoUrl } = units[0];

    validateArrayLength(units, 1);
    validateStringEquality(title, fakeModuleData.units[0].title);
    validateStringEquality(content, fakeModuleData.units[0].content);
    validateStringEquality(videoUrl, fakeModuleData.units[0].videoUrl);
  });

  test('should validate Course with single module + multiple units successfully saved', async () => {
    validateNotEmpty(validCourse);

    const unitTwo = {
      title: 'Dummy Unit Two',
      content: 'Dummy Content Two',
      videoUrl: 'https://dummy2.video.com',
    };

    validCourse.modules[0].units.push(unitTwo);

    const { modules } = validCourse;

    const { units } = modules[0];

    validateArrayLength(units, 2);

    const { title, content, videoUrl } = units[0];

    validateStringEquality(title, fakeModuleData.units[0].title);
    validateStringEquality(content, fakeModuleData.units[0].content);
    validateStringEquality(videoUrl, fakeModuleData.units[0].videoUrl);

    const { title: title2, content: content2, videoUrl: videoUrl2 } = units[1];

    validateStringEquality(title2, unitTwo.title);
    validateStringEquality(content2, unitTwo.content);
    validateStringEquality(videoUrl2, unitTwo.videoUrl);
  });

  test('should validate new Course with multiple instructors + no modules successfully saved', async () => {
    const validUserTwo = await User.create({
      local: fakeUserDataTwo,
      role: fakeUserDataTwo.role,
    });
    const { _id } = validUserTwo;
    fakeCourseData.instructors.push(_id);
    fakeCourseData.title = 'Dummy Course 2';

    validCourse = await Course.create(fakeCourseData);

    validateNotEmpty(validCourse);

    const { _id: userId } = validUser;
    const { _id: userIdTwo } = validUserTwo;

    const { instructors, modules } = validCourse;

    validateArrayLength(instructors, 2);
    validateArrayContaining(instructors, [userId, userIdTwo]);
    validateArrayLength(modules, 0);
  });
});
