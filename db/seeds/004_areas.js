/* eslint-disable no-console */
const Area = require('../../models/area');
const areas = require('../resources/areas');

exports.seed = async () => {
  try {
    console.log('Planting seeds for areas');

    const seeds = await areas();
    await Area.insertMany(seeds);

    console.log('✓');
  } catch (err) {
    console.warn('Error! Cannot insert coaches');
    console.error(err);
  }
};
