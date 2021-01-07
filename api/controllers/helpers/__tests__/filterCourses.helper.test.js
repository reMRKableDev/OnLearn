const { filterCoursesHelper } = require('../index');
const {
  validateArrayLength,
} = require('../../../../utils/test-utils/validators.utils');

let allCoursesListDummy;
let incomingUserIdDummy;

const firstInstructorIdDummy = '43833ad4-77ea-4669-a6d3-996b72eb3595';
const secondInstructorIdDummy = '67767882-eebd-47e4-bcf4-2b92c202f857';

const firstStudentIdDummy = '9aa29da0-8662-4685-8699-b191a3de162a';

describe('filterCourses Helper Test Suite', () => {
  beforeEach(() => {
    allCoursesListDummy = [
      {
        dummyTitle: expect.anything(),
        dummyDescription: expect.anything(),
        instructors: [firstInstructorIdDummy],
        students: [firstStudentIdDummy, secondInstructorIdDummy],
        modules: expect.anything(),
      },
      {
        dummyTitle: expect.anything(),
        dummyDescription: expect.anything(),
        instructors: [firstInstructorIdDummy],
        students: [firstStudentIdDummy],
        modules: expect.anything(),
      },
      {
        dummyTitle: expect.anything(),
        dummyDescription: expect.anything(),
        instructors: [secondInstructorIdDummy],
        students: [firstStudentIdDummy],
        modules: expect.anything(),
      },
    ];
  });

  test('should validate two empty arrays returned when the incomingUserId does not exist in the list', () => {
    incomingUserIdDummy = 1;

    const { coursesTaught, coursesLearned } = filterCoursesHelper(
      allCoursesListDummy,
      incomingUserIdDummy
    );

    validateArrayLength(coursesTaught, 0);
    validateArrayLength(coursesLearned, 0);
  });

  test('should validate coursesTaught to contain data associated to incomingUserId and coursesLearned to be empty', () => {
    incomingUserIdDummy = firstInstructorIdDummy;

    const { coursesTaught, coursesLearned } = filterCoursesHelper(
      allCoursesListDummy,
      incomingUserIdDummy
    );

    validateArrayLength(coursesTaught, 2);
    validateArrayLength(coursesLearned, 0);
  });

  test('should validate coursesLearned to contain data associated to incomingUserId and coursesTaught to be empty', () => {
    incomingUserIdDummy = firstStudentIdDummy;

    const { coursesTaught, coursesLearned } = filterCoursesHelper(
      allCoursesListDummy,
      incomingUserIdDummy
    );

    validateArrayLength(coursesTaught, 0);
    validateArrayLength(coursesLearned, 3);
  });

  test('should validate coursesTaught & coursesLearned  to contain data associated to incomingUserId', () => {
    incomingUserIdDummy = secondInstructorIdDummy;

    const { coursesTaught, coursesLearned } = filterCoursesHelper(
      allCoursesListDummy,
      incomingUserIdDummy
    );

    validateArrayLength(coursesTaught, 1);
    validateArrayLength(coursesLearned, 1);
  });
});
