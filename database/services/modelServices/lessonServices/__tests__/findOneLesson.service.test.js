const { findOneLessonService, createNewLessonService } = require('../index');
const { fakeLessonData, fakeIdFormatData } = require('../../../../fixtures');
const {
  validateNotEmpty,
  validateInstanceOf,
} = require('../../../../../utils/test-utils/validators.utils');
const {
  dbConnect,
  dbDisconnect,
} = require('../../../../../utils/test-utils/dbHandler.utils');

describe('findOneLesson Service Test Suite', () => {
  beforeEach(async () => dbConnect());
  afterEach(async () => dbDisconnect());

  test('should validate returns error when course id is incorrect', async () => {
    const { incorrectFormat } = fakeIdFormatData;

    const results = await findOneLessonService(incorrectFormat);

    validateInstanceOf(results, Error);
  });

  test('should validate successfully finding one saved course', async () => {
    const { topic, content, videoUrl } = fakeLessonData;

    const newCourse = await createNewLessonService(topic, content, videoUrl);

    const { _id } = newCourse;

    const results = await findOneLessonService(_id);

    validateNotEmpty(results);
  });
});
