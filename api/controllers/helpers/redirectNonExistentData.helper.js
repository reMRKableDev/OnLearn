exports.redirectNonExistentDataHelper = (request, response) => {
  request.flash('error_msg', "Sorry, this doesn't exist!");
  response.redirect('/');
};
