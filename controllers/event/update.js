const { error } = require('../../functions');
const { Event } = require('../../models');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { me } = req.user;
  if (!id || !me) {
    throw error(404, 'Missing required params');
  }

  const event = await Event.findById(id);
  if (!event) {
    throw error(404, 'Resource not found');
  }

  await event.update(req.body);

  return res.status(200).json({ data: event, message: 'Event updated' });
};
