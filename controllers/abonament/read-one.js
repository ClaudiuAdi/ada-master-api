const { error } = require('../../functions');
const { Abonament, Event } = require('../../models');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { me } = req.user;
  if (!id || !me) {
    throw error(404, 'Missing required params');
  }

  const abonament = await Abonament.findById(id).lean().exec();
  if (!abonament) {
    throw error(404, 'Resource not found');
  }

  // adding abonament events
  const events = await Event.find({
    abonament: id,
  });
  abonament.events = events;

  return res.status(200).json(abonament);
};
