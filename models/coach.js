const mongoose = require('mongoose');
const { isEmail } = require('validator');
const { hashPasswords, paginate, validate } = require('./plugins');
const { timestamps } = require('./schemas');

const name = 'coach';
const schema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (value) => isEmail(value),
    },
  },
  salary: {
    type: Number,
  },
  coach_category: {
    type: String,
  },
  license_number: {
    type: String,
  },
  ...timestamps,
});

schema.plugin(hashPasswords);
schema.plugin(paginate);
schema.plugin(validate);

module.exports = mongoose.model(name, schema);
