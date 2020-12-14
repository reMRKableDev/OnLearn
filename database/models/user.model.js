const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: [true, 'First name is required.'],
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'Last name is required.'],
  },
  username: {
    type: String,
    trim: true,
    required: [true, 'Username is required.'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: { type: String, required: [true, 'Password is required.'] },
  role: { type: String },
  classes: [{ type: Schema.Types.ObjectId, ref: 'Class' }],
});

module.exports = model('User', userSchema);
