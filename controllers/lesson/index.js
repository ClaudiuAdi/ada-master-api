const create = require('./create');
const readMany = require('./read-many');
const readOne = require('./read-one');
const remove = require('./remove');
const update = require('./update');
const adminReadOne = require('./admin-read-one');
const finishLesson = require('./finish-lesson');

module.exports = {
  create,
  finishLesson,
  readMany,
  readOne,
  remove,
  update,
  adminReadOne,
};
