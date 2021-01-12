const { createNewCourseService } = require('../index');
const { fakeCourseData } = require('../../../../fixtures');
const {
  dbConnect,
  dbDisconnect,
} = require('../../../../../utils/test-utils/dbHandler.utils');
const {
  validateNotEmpty,
  validateInstanceOf,
  validateStringEquality,
} = require('../../../../../utils/test-utils/validators.utils');

describe('createNewCourse Service Test Suite', () => {
  beforeEach(async () => dbConnect());
  afterEach(async () => dbDisconnect());

  test('should validate returning error while saving course', async () => {
    const { title, description } = fakeCourseData;

    const newCourse = await createNewCourseService(title, description);

    validateNotEmpty(newCourse);

    const newCourseDuplicate = await createNewCourseService(title, description);

    validateInstanceOf(newCourseDuplicate, Error);
  });

  test('should validate successfully saving course', async () => {
    const { title, description } = fakeCourseData;

    const newCourse = await createNewCourseService(title, description);

    validateNotEmpty(newCourse);
    validateStringEquality(newCourse.title, fakeCourseData.title);
    validateStringEquality(newCourse.description, fakeCourseData.description);
  });
});
