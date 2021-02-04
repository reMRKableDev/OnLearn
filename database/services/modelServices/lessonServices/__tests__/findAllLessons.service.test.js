const { createNewCourseService } = require('../../courseServices');
const { findAllLessonsService, createNewLessonService } = require('../index');
const { fakeCourseData, fakeLessonData } = require('../../../../fixtures');
const {
  dbConnect,
  dbDisconnect,
} = require('../../../../../utils/test-utils/dbHandler.utils');
const {
  validateNotEmpty,
  validateArrayLength,
  validateStringEquality,
} = require('../../../../../utils/test-utils/validators.utils');

let newCourse;
let newLesson;

describe('findAllLessons Service Test Suite', () => {
  beforeEach(async () => {
    await dbConnect();

    const { title, description } = fakeCourseData;
    newCourse = await createNewCourseService(title, description);
  });

  afterEach(async () => dbDisconnect());

  test('should validate successfully finding saved lesson', async () => {
    validateArrayLength(newCourse.lessons, 0);

    const { topic, content, videoUrl } = fakeLessonData;
    newLesson = await createNewLessonService(topic, content, videoUrl);

    newCourse.lessons.push(newLesson);
    const results = await findAllLessonsService();

    validateNotEmpty(results);
    validateArrayLength(results, 1);

    const [expectedLessonData] = results;

    validateStringEquality(expectedLessonData.topic, fakeLessonData.topic);
    validateStringEquality(expectedLessonData.content, fakeLessonData.content);
    validateStringEquality(
      expectedLessonData.videoUrl,
      fakeLessonData.videoUrl
    );
  });
});
