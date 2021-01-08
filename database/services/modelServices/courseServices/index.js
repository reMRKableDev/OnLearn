const { findAllCoursesService } = require('./findAllCourses.service');
const { createNewCourseService } = require('./createNewCourse.service');
const { findOneCourseService } = require('./findOneCourse.service');

module.exports = {
  findOneCourseService,
  findAllCoursesService,
  createNewCourseService,
};
