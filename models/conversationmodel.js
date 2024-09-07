/* eslint-disable import/no-extraneous-dependencies */
const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    conversation: [
      {
        role: {
          type: String,
          enum: ['user', 'bot'], // Defines the role of the sender (user or bot)
          required: true,
        },
        message: {
          type: String,
          required: true,
        },
        timestamp: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true },
);

const Conversation = mongoose.model('Chat', conversationSchema);

module.exports = Conversation;
