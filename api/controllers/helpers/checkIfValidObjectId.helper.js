const mongoose = require('mongoose');

exports.checkIfValidObjectIdHelper = (id) =>
  mongoose.Types.ObjectId.isValid(id);
