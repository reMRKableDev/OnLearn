const {
  deleteCourseService,
  findAllCoursesService,
  createNewCourseService,
} = require('../index');
const { fakeCourseData, fakeIdFormatData } = require('../../../../fixtures');
const {
  validateEquality,
  validateNotEmpty,
  validateInstanceOf,
  validateArrayLength,
  validateStringEquality,
} = require('../../../../../utils/test-utils/validators.utils');
const {
  dbConnect,
  dbDisconnect,
} = require('../../../../../utils/test-utils/dbHandler.utils');

let newCourse;

describe('deleteCourse Service Test Suite ', () => {
  beforeEach(async () => {
    await dbConnect();

    const { title, description } = fakeCourseData;

    newCourse = await createNewCourseService(title, description);

    validateNotEmpty(newCourse);
  });

  afterEach(async () => dbDisconnect());

  test('should validate error when wrong incorrect id is used', async () => {
    const { incorrectFormat } = fakeIdFormatData;

    const results = await deleteCourseService(incorrectFormat);

    validateInstanceOf(results, Error);
  });

  test('should validate successfully deleting course', async () => {
    const results = await findAllCoursesService();

    validateNotEmpty(results);
    validateArrayLength(results, 1);

    const { _id } = newCourse;

    await deleteCourseService(_id);

    const resultsAfterDelete = await findAllCoursesService();

    validateArrayLength(resultsAfterDelete, 0);
  });
});
