const { error } = require('../../functions');
const { Event } = require('../../models');

module.exports = async (req, res) => {
  const { me } = req.user;
  if (!me) {
    throw error(404, 'Missing required params');
  }

  const events = await Event.find({}).populate('player').populate('abonament').paginate(req.query);
  if (!events) {
    throw error(404, 'Resource not found');
  }

  return res.status(200).json(events);
};
