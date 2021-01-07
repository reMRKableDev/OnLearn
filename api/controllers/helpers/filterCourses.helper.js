const { includesUserTypeHelper } = require('./includesUserType.helper');

exports.filterCoursesHelper = (allCoursesList, incomingUserId) => {
  const coursesTaught = allCoursesList.filter((courseItem) =>
    includesUserTypeHelper(courseItem.instructors, incomingUserId)
  );

  const coursesLearned = allCoursesList.filter((courseItem) =>
    includesUserTypeHelper(courseItem.students, incomingUserId)
  );
  return { coursesTaught, coursesLearned };
};
