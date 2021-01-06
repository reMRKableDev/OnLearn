const Course = require('../../../database/models/course.model');
exports.createNewCourseController = async (req, res) => {
  const { title, description } = req.body;
  const { _id } = req.user;

  // TODO: Make service
  const newCourse = await Course.create({
    title,
    description,
  });

  newCourse.instructors.push(_id);
  newCourse.save();

  res.redirect(302, '/my-courses');
};
