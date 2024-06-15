/* eslint-disable no-console */
const Lesson = require('../../models/lesson');
const lessons = require('../resources/lessons');

exports.seed = async () => {
  try {
    console.log('Planting seeds for lessons');

    const seeds = await lessons();
    await Lesson.insertMany(seeds);

    console.log('✓');
  } catch (err) {
    console.warn('Error! Cannot insert lessons');
    console.error(err);
  }
};
