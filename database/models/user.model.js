const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  local: {
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    username: {
      type: String,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String },
  },
  google: {
    id: String,
    token: String,
    email: String,
    name: String,
  },
  profilePictureUrl: {
    type: 'String',
    default: 'https://via.placeholder.com/150',
  },
  role: {
    type: String,
    enum: ['student', 'instructor', 'admin'],
    default: 'student',
  },
  courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
});

module.exports = model('User', userSchema);
