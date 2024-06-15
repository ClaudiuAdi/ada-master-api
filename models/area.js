const mongoose = require('mongoose');
const { hashPasswords, paginate, validate } = require('./plugins');
const { timestamps } = require('./schemas');

const name = 'area';
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dimension: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  ...timestamps,
});

schema.plugin(hashPasswords);
schema.plugin(paginate);
schema.plugin(validate);

module.exports = mongoose.model(name, schema);
