const { Schema, model } = require('mongoose');

const lessonSchema = new Schema({
  topic: { type: String, trim: true, unique: true },
  content: { type: String, trim: true },
  videoUrl: { type: String, default: 'https://via.placeholder.com/200x150' },
  isComplete: { type: Boolean, default: false },
});

module.exports = model('Lesson', lessonSchema);
