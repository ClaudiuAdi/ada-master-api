const { error } = require('../../functions');
const { Sport } = require('../../models');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { me } = req.user;
  if (!id || !me) {
    throw error(404, 'Missing required params');
  }

  const sport = await Sport.findById(id);
  if (!sport) {
    throw error(404, 'Resource not found');
  }

  await sport.update(req.body);

  return res.status(200).json({ data: sport, message: 'Sport updated' });
};
