const { error } = require('../../functions');
const { Player } = require('../../models');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { me } = req.user;
  if (!id || !me) {
    throw error(404, 'Missing required params');
  }

  const player = await Player.findById(id);
  if (!player) {
    throw error(404, 'Resource not found');
  }

  await player.remove();

  return res.status(200).json({ data: player, message: 'Player removed' });
};
