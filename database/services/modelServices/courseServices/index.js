const { updateCourseService } = require('./updateCourse.service');
const { findOneCourseService } = require('./findOneCourse.service');
const { findAllCoursesService } = require('./findAllCourses.service');
const { createNewCourseService } = require('./createNewCourse.service');

module.exports = {
  updateCourseService,
  findOneCourseService,
  findAllCoursesService,
  createNewCourseService,
};
