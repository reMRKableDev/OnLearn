const { Schema, model } = require('mongoose');

const courseSchema = new Schema({
  title: { type: String, trim: true, unique: true },
  description: { type: String, trim: true },
  imageUrl: { type: String, default: 'https://via.placeholder.com/200x150' },
  instructors: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  students: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  lessons: [{ type: Schema.Types.ObjectId, ref: 'Lesson' }],
});

module.exports = model('Course', courseSchema);
