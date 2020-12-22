const { checkIfValidObjectIdHelper } = require('../index');
const {
  validateEquality,
} = require('../../../../utils/test-utils/validators.utils');

describe('checkIfValidObjectId Helper Test Suite', () => {
  test('should validate true for incoming id with correct Mongo ObjectId format', () => {
    const id = `5fe0f5e398cf4637b715db3f`;

    const isValidObjectId = checkIfValidObjectIdHelper(id);

    validateEquality(isValidObjectId, true);
  });

  test('should validate false for incoming id with correct Mongo ObjectId format', () => {
    const id = `chicken`;

    const isValidObjectId = checkIfValidObjectIdHelper(id);

    validateEquality(isValidObjectId, false);
  });
});
