const { Schema, model } = require('mongoose');

const courseSchema = new Schema({
  title: { type: String, trim: true, unique: true },
  description: { type: String, trim: true },
  imageUrl: { type: String, default: 'https://via.placeholder.com/200x150' },
  instructors: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  students: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  modules: [
    {
      title: { type: String, trim: true },
      description: { type: String, trim: true },
      progress: { type: Number, default: 0 },
      units: [
        {
          title: { type: String, trim: true },
          content: { type: String, trim: true },
          videoUrl: { type: String, trim: true },
          completed: { type: Boolean, default: false },
        },
      ],
    },
  ],
});

module.exports = model('Course', courseSchema);
