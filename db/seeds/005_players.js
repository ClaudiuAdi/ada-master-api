/* eslint-disable no-console */
const Player = require('../../models/player');
const players = require('../resources/players');

exports.seed = async () => {
  try {
    console.log('Planting seeds for players');

    const seeds = await players();
    await Player.insertMany(seeds);

    console.log('✓');
  } catch (err) {
    console.warn('Error! Cannot insert identities');
    console.error(err);
  }
};
