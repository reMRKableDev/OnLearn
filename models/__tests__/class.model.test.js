const { dbConnect, dbDisconnect } = require('../../utils/dbHandler.utils');
const Class = require('../class.model');
const { validateNotEmpty } = require('../../utils/validators.utils');

beforeAll(async () => dbConnect());
afterAll(async () => dbDisconnect());

describe('Class Model Test Suite', () => {
  const fakeClassDataNoLessons = {
    title: 'Dummy Class',
    description: 'Dummy Description',
    instructor: 'Dummy Instructor',
    imageUrl: 'http://dummy.image.com',
    lessons: [],
  };

  test('should validate saving a new class successfully', async () => {
    const validClass = new Class(fakeClassDataNoLessons);
    const savedClass = await validClass.save();

    validateNotEmpty(savedClass);
  });
});
