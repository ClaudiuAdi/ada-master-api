const { error } = require('../../functions');
const { Player, Identity } = require('../../models');

module.exports = async (req, res) => {
  const { me } = req.user;
  if (!me) {
    throw error(404, 'Missing required params');
  }

  const players = await Identity.find({ role: 'player' }).paginate(req.query);
  if (!players) {
    throw error(404, 'Resource not found');
  }

  return res.status(200).json(players);
};
