/* eslint-disable no-console */
const Event = require('../../models/event');
const events = require('../resources/events');

exports.seed = async () => {
  try {
    console.log('Planting seeds for events');

    const seeds = await events();
    await Event.insertMany(seeds);

    console.log('✓');
  } catch (err) {
    console.warn('Error! Cannot insert events');
    console.error(err);
  }
};
