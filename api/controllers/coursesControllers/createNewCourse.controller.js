const {
  createNewCourseService,
} = require('../../../database/services/modelServices/courseServices');
const { render500ErrorHelper } = require('../helpers');

exports.createNewCourseController = async (req, res) => {
  const { title, description } = req.body;
  const { _id } = req.user;

  const newCourse = await createNewCourseService(title, description);

  if (newCourse instanceof Error) {
    render500ErrorHelper(res);
    return;
  }

  newCourse.instructors.push(_id);
  await newCourse.save();

  res.redirect('/my-courses');
};
