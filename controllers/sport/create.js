const { error } = require('../../functions');
const { Identity, Sport } = require('../../models');

module.exports = async (req, res) => {
  const { me } = req.user;
  if (!me) {
    throw error(404, 'Missing required params');
  }

  const identity = await Identity.findById(me).lean();
  const payload = {
    ...req.body,
    identity,
  };

  const sport = await Sport.create(payload);
  if (!sport) {
    throw error(404, 'Resource not found');
  }

  return res.status(200).json({ data: sport, message: 'Sport created' });
};
