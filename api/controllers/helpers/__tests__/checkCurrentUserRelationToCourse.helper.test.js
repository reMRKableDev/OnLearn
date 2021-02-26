const { checkCurrentUserRelationToCourseHelper } = require('../index');
const {
  validateEquality,
} = require('../../../../utils/test-utils/validators.utils');

let dummyInstructorsList;
let dummyStudentsList;

const dummyInstructorOneId = 'fedfe6ed';
const dummyInstructorTwoId = 'f7e52938';

const dummyStudentOneId = '94aa6839';
const dummyStudentTwoId = 'd30320f3';
const dummyStudentThreeId = '9c622219';

describe('checkCurrentUserRelationToCourse Helper Test Suite', () => {
  beforeEach(() => {
    dummyInstructorsList = [
      { _id: dummyInstructorOneId },
      { _id: dummyInstructorTwoId },
    ];
    dummyStudentsList = [
      { _id: dummyStudentOneId },
      { _id: dummyStudentTwoId },
      { _id: dummyStudentThreeId },
    ];
  });

  test('should validate current user as an instructor', () => {
    const dummyCurrentUserId = dummyInstructorTwoId;

    const {
      isCurrentUserInStudentList,
      isCurrentUserTheCourseInstructor,
    } = checkCurrentUserRelationToCourseHelper(
      dummyInstructorsList,
      dummyCurrentUserId,
      dummyStudentsList
    );

    validateEquality(isCurrentUserInStudentList, false);
    validateEquality(isCurrentUserTheCourseInstructor, true);
  });
});
