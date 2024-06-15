const mongoose = require('mongoose');
const { hashPasswords, paginate, validate } = require('./plugins');
const { timestamps } = require('./schemas');

const name = 'event';
const schema = new mongoose.Schema({
  player: {
    type: mongoose.Types.ObjectId,
    ref: 'identity',
  },
  abonament: {
    type: mongoose.Types.ObjectId,
    ref: 'abonament',
  },
  event_type: {
    type: String,
  },
  ...timestamps,
});

schema.plugin(hashPasswords);
schema.plugin(paginate);
schema.plugin(validate);

module.exports = mongoose.model(name, schema);
