const mongoose = require('mongoose');
const { hashPasswords, paginate, validate } = require('./plugins');
const { timestamps } = require('./schemas');

const name = 'feedback';
const schema = new mongoose.Schema({
  lesson: {
    type: mongoose.Types.ObjectId,
    ref: 'lesson',
  },
  persons: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'person',
    },
  ],
  feedbacks: [
    {
      type: String,
      required: true,
    },
  ],
  numberOfFeedbacks: {
    type: Number,
    required: true,
  },

  ...timestamps,
});

schema.plugin(hashPasswords);
schema.plugin(paginate);
schema.plugin(validate);

module.exports = mongoose.model(name, schema);
