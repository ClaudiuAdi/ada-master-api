const create = require('./create');
const readMany = require('./read-many');
const readOne = require('./read-one');
const remove = require('./remove');
const update = require('./update');
const adminReadOne = require('./admin-read-one');

module.exports = {
  create,
  readMany,
  readOne,
  remove,
  update,
  adminReadOne,
};
