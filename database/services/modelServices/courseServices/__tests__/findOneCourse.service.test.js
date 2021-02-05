const { findOneCourseService, createNewCourseService } = require('../index');
const { fakeCourseData, fakeIdFormatData } = require('../../../../fixtures');
const {
  dbConnect,
  dbDisconnect,
} = require('../../../../../utils/test-utils/dbHandler.utils');
const {
  validateNotEmpty,
  validateInstanceOf,
} = require('../../../../../utils/test-utils/validators.utils');

describe('findOneCourse Service Test Suite', () => {
  beforeEach(async () => dbConnect());
  afterEach(async () => dbDisconnect());

  test('should validate returns error when course id is incorrect', async () => {
    const { incorrectFormat } = fakeIdFormatData;

    const results = await findOneCourseService(incorrectFormat);

    validateInstanceOf(results, Error);
  });

  test('should validate successfully finding one saved course', async () => {
    const { title, description } = fakeCourseData;

    const newCourse = await createNewCourseService(title, description);

    const { _id } = newCourse;

    const results = await findOneCourseService(_id);

    validateNotEmpty(results);
  });
});
