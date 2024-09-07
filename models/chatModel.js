/* eslint-disable import/no-extraneous-dependencies */
const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema(
  {
    intent: {
      type: [String],
      required: true,
      trim: true,
    },
    responses: {
      type: [String], // Array of possible responses
      required: true,
    },
    tags: {
      type: [String], // Array of related tags
      required: true,
    },
  },
  { timestamps: true },
);

// chatSchema.virtual('durationWeeks').get(function () {
//   return this.duration / 7;
// });

// chatSchema.pre('save', function (next) {
//   this.slug = slugify(this.name, { lower: true });
//   next();
// });

// tourSchema.post('save', (doc, next) => {
//   console.log(doc);
//   next();
// });

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
