exports.checkCurrentUserRelationToCourseHelper = (
  instructorsList,
  currentUserId,
  studentsList
) => {
  let isCurrentUserTheCourseInstructor;
  let isCurrentUserInStudentList = false;

  if (instructorsList && instructorsList.length) {
    const courseInstructorsList = instructorsList.map(
      ({ _id: instructorId }) => instructorId
    );

    isCurrentUserTheCourseInstructor = courseInstructorsList.includes(
      currentUserId
    );
  }

  if (studentsList && studentsList.length) {
    const courseStudentList = studentsList.map(
      ({ _id: studentId }) => studentId
    );
    isCurrentUserInStudentList = courseStudentList.includes(currentUserId);
  }

  return { isCurrentUserInStudentList, isCurrentUserTheCourseInstructor };
};
