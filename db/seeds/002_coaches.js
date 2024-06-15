/* eslint-disable no-console */
const Coach = require('../../models/coach');
const coaches = require('../resources/coaches');

exports.seed = async () => {
  try {
    console.log('Planting seeds for coaches');

    const seeds = await coaches();
    await Coach.insertMany(seeds);

    console.log('✓');
  } catch (err) {
    console.warn('Error! Cannot insert coaches');
    console.error(err);
  }
};
