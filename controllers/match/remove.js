const { error } = require('../../functions');
const { Match } = require('../../models');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { me } = req.user;
  if (!id || !me) {
    throw error(404, 'Missing required params');
  }

  const match = await Match.findById(id);
  if (!match) {
    throw error(404, 'Resource not found');
  }

  await match.remove();

  return res.status(200).json({ data: match, message: 'Match removed' });
};
