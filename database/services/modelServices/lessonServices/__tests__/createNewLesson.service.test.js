const { createNewLessonService } = require('../index');
const { fakeLessonData } = require('../../../../fixtures');
const { createNewCourseService } = require('../../courseServices');
const {
  dbConnect,
  dbDisconnect,
} = require('../../../../../utils/test-utils/dbHandler.utils');
const {
  validateNotEmpty,
  validateInstanceOf,
  validateArrayLength,
  validateStringEquality,
} = require('../../../../../utils/test-utils/validators.utils');

describe('createNewLesson Service Test Suite', () => {
  beforeEach(async () => dbConnect());
  afterEach(async () => dbDisconnect());

  test('should validate returning error while saving lesson', async () => {
    const { topic, content, videoUrl } = fakeLessonData;

    const newLesson = await createNewLessonService(topic, content, videoUrl);

    validateNotEmpty(newLesson);

    const newLessonDuplicate = await createNewLessonService(
      topic,
      content,
      videoUrl
    );

    validateInstanceOf(newLessonDuplicate, Error);
  });

  test('should validate successfully saving lesson', async () => {
    const { topic, content, videoUrl } = fakeLessonData;

    const newLesson = await createNewLessonService(topic, content, videoUrl);

    validateNotEmpty(newLesson);
    validateStringEquality(newLesson.topic, fakeLessonData.topic);
    validateStringEquality(newLesson.content, fakeLessonData.content);
    validateStringEquality(newLesson.videoUrl, fakeLessonData.videoUrl);
  });
});
