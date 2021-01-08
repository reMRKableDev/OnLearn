exports.redirectNonexistentCourseHelper = (request, response) => {
  request.flash('error_msg', "Course doesn't exist!");
  response.redirect(302, '/');
};
