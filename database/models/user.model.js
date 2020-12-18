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

  role: {
    type: String,
    enum: ['student', 'instructor', 'admin'],
    default: 'student',
  },
  classes: [{ type: Schema.Types.ObjectId, ref: 'Class' }],
});

module.exports = model('User', userSchema);
