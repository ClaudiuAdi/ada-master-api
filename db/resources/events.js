const Abonaments = require('../../models/abonament');
const Identity = require('../../models/identity');

module.exports = async () => {
  const players = await Identity.find({ role: 'player' });
  const abonaments = await Abonaments.find();

  return [
    {
      player: players[0]._id,
      abonament: abonaments[0]._id,
      event_type: 'unofficial',
    },
    {
      player: players[0]._id,
      abonament: abonaments[0]._id,
      event_type: 'unofficial',
    },
    {
      player: players[0]._id,
      abonament: abonaments[0]._id,
      event_type: 'national',
    },
    {
      player: players[0]._id,
      abonament: abonaments[0]._id,
      event_type: 'international',
    },
  ];
};
