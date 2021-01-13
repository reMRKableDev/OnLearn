const { render500ErrorHelper } = require('../helpers');
const {
  findOneCourseService,
} = require('../../../database/services/modelServices/courseServices');

exports.registerToCourseController = async (req, res) => {
  const { _id } = req.user;
  const { id } = req.params;

  const isFoundCourse = await findOneCourseService(id);

  if (isFoundCourse instanceof Error) {
    render500ErrorHelper(res);
    return;
  }

  isFoundCourse.students.push(_id);
  await isFoundCourse.save();

  req.flash('success_msg', 'Successfully registered to course');
  res.redirect('/my-courses');
};
