/* eslint-disable import/no-extraneous-dependencies */
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    lastInteraction: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

const Conversation = mongoose.model('User', UserSchema);

module.exports = Conversation;
