const {
  createNewCourseService,
} = require('../../../database/services/modelServices/courseServices');
const { render500ErrorHelper } = require('../helpers');
const {
  ensureDataInVulnerableOfInjectionAttacks,
} = require('../../../utils/global-utils');

exports.createNewCourseController = async (req, res) => {
  const secureRequestBody = ensureDataInVulnerableOfInjectionAttacks(req.body);

  const { title, description } = secureRequestBody;
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
