const Class = require('../class.model');
const { fakeClassDataNoLessons } = require('../fixtures');
const { validateNotEmpty } = require('../../utils/validators.utils');
const { dbConnect, dbDisconnect } = require('../../utils/dbHandler.utils');

beforeAll(async () => dbConnect());
afterAll(async () => dbDisconnect());

describe('Class Model Test Suite', () => {
  test('should validate saving a new class successfully', async () => {
    const validClass = new Class(fakeClassDataNoLessons);
    const savedClass = await validClass.save();

    validateNotEmpty(savedClass);
  });
});
