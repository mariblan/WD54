import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'name is required'],
      unique: true,
      trim: true,
      match: /^[A-Za-z]+$/,
      minlength: 2,
      maxlength: 20,
    },
    email: {
      type: String,
      required: [true, 'email is required'],
      match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      select: false,
      minlength: 6,
    },
    active: { type: Boolean, required: true, default: true },
  },
  { collection: 'users' }
);

export default mongoose.model('User', userSchema);