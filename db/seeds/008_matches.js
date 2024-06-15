/* eslint-disable no-console */
const Match = require('../../models/match');
const matches = require('../resources/matches');

exports.seed = async () => {
  try {
    console.log('Planting seeds for matches');

    const seeds = await matches();
    await Match.insertMany(seeds);

    console.log('✓');
  } catch (err) {
    console.warn('Error! Cannot insert matches');
    console.error(err);
  }
};
