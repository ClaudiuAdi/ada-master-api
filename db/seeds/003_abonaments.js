/* eslint-disable no-console */
const Abonament = require('../../models/abonament');
const abonaments = require('../resources/abonaments');

exports.seed = async () => {
  try {
    console.log('Planting seeds for abonaments');

    const seeds = await abonaments();
    await Abonament.insertMany(seeds);

    console.log('✓');
  } catch (err) {
    console.warn('Error! Cannot insert coaches');
    console.error(err);
  }
};
