let { findAllCoursesService, createNewCourseService } = require('../index');
const { fakeCourseData } = require('../../../../fixtures');
const {
  dbConnect,
  dbDisconnect,
} = require('../../../../../utils/test-utils/dbHandler.utils');
const {
  validateNotEmpty,
  validateArrayLength,
  validateStringEquality,
  validateInstanceOf,
} = require('../../../../../utils/test-utils/validators.utils');

let newCourse;

describe('findAllCourses Service Test Suite', () => {
  beforeEach(async () => {
    await dbConnect();
    jest.clearAllMocks();
  });

  afterEach(async () => dbDisconnect());

  test('should validate successfully finding saved course', async () => {
    const { title, description } = fakeCourseData;

    newCourse = await createNewCourseService(title, description);

    const results = await findAllCoursesService();

    validateNotEmpty(results);
    validateArrayLength(results, 1);

    const [expectedCourseData] = results;

    validateStringEquality(expectedCourseData.title, newCourse.title);
    validateStringEquality(
      expectedCourseData.description,
      newCourse.description
    );
  });
});
