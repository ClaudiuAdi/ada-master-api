/* eslint-disable no-console */
const Sport = require('../../models/sport');
const sports = require('../resources/sports');

exports.seed = async () => {
  try {
    console.log('Planting seeds for sports');

    const seeds = await sports();
    await Sport.insertMany(seeds);

    console.log('✓');
  } catch (err) {
    console.warn('Error! Cannot insert sports');
    console.error(err);
  }
};
