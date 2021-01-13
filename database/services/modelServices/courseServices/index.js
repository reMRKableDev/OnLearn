const { deleteCourseService } = require('./deleteCourse.service');
const { updateCourseService } = require('./updateCourse.service');
const { findOneCourseService } = require('./findOneCourse.service');
const { findAllCoursesService } = require('./findAllCourses.service');
const { createNewCourseService } = require('./createNewCourse.service');

module.exports = {
  deleteCourseService,
  updateCourseService,
  findOneCourseService,
  findAllCoursesService,
  createNewCourseService,
};
