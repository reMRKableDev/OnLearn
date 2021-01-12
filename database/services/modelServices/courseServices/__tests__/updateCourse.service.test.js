const { updateCourseService, createNewCourseService } = require('../index');
const { fakeCourseData, fakeIdFormatData } = require('../../../../fixtures');
const {
  dbConnect,
  dbDisconnect,
} = require('../../../../../utils/test-utils/dbHandler.utils');
const {
  validateNotEmpty,
  validateInstanceOf,
  validateStringEquality,
} = require('../../../../../utils/test-utils/validators.utils');

let newCourse;

describe('updateCourse Service Test Suite ', () => {
  beforeEach(async () => {
    await dbConnect();

    const { title, description } = fakeCourseData;

    newCourse = await createNewCourseService(title, description);

    validateNotEmpty(newCourse);
  });

  afterEach(async () => dbDisconnect());

  test('should validate error when wrong incorrect id is used', async () => {
    const { incorrectFormat } = fakeIdFormatData;
    const { title, description } = newCourse;

    const results = await updateCourseService(
      incorrectFormat,
      title,
      description
    );

    validateInstanceOf(results, Error);
  });

  test('should validate successfully updating course', async () => {
    const title = 'New Dummy Title';
    const description = 'New Dummy Description';
    const { _id } = newCourse;

    const results = await updateCourseService(_id, title, description);

    validateNotEmpty(results);
    validateStringEquality(results.title, title);
    validateStringEquality(results.description, description);
  });
});
