const { includesUserTypeHelper } = require('./includesUserType.helper');

exports.filterCoursesHelper = (allCourses, incomingId) => {
  const coursesTaught = allCourses.filter((courseItem) =>
    includesUserTypeHelper(courseItem.instructors, incomingId)
  );

  const coursesLearned = allCourses.filter((courseItem) =>
    includesUserTypeHelper(courseItem.students, incomingId)
  );
  return { coursesTaught, coursesLearned };
};
