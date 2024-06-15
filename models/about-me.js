const mongoose = require('mongoose');
const { hashPasswords, paginate, validate } = require('./plugins');
const { timestamps } = require('./schemas');

const name = 'aboutMe';
const schema = new mongoose.Schema({
  person: {
    type: mongoose.Types.ObjectId,
    ref: 'identity',
  },
  aboutMe: {
    type: String,
    required: true,
  },

  ...timestamps,
});

schema.plugin(hashPasswords);
schema.plugin(paginate);
schema.plugin(validate);

module.exports = mongoose.model(name, schema);
