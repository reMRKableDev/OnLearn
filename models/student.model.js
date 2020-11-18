const { Schema, model } = require("mongoose");

const studentSchema = new Schema({
  firstName: String,
  lastName: String,
  username: String,
  email: String,
  classes: [
    {
      class_id: { type: [Schema.Types.ObjectId] },
      class_title: { type: String },
    },
  ],
});

module.exports = model("Student", studentSchema);
