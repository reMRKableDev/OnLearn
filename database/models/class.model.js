const { Schema, model } = require('mongoose');

const classSchema = new Schema({
  title: String,
  description: String,
  instructor: String,
  imageUrl: String,
  lessons: [
    {
      lesson_number: { type: Number },
      lesson_title: { type: String },
      lesson_body: { type: String },
    },
  ],
});

module.exports = model('Class', classSchema);
