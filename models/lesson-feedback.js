const mongoose = require('mongoose');
const { hashPasswords, paginate, validate } = require('./plugins');
const { timestamps } = require('./schemas');

const name = 'lessonFeedback';
const schema = new mongoose.Schema({
  lesson: {
    type: mongoose.Types.ObjectId,
    ref: 'lesson',
  },
  analysis: {
    type: String,
    required: true,
  },

  ...timestamps,
});

schema.plugin(hashPasswords);
schema.plugin(paginate);
schema.plugin(validate);

module.exports = mongoose.model(name, schema);
