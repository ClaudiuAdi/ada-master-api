const { error } = require('../../functions');
const { Coach } = require('../../models');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { me } = req.user;
  if (!id || !me) {
    throw error(404, 'Missing required params');
  }

  const coach = await Coach.findById(id);
  if (!coach) {
    throw error(404, 'Resource not found');
  }

  await coach.remove();

  return res.status(200).json({ data: coach, message: 'Coach removed' });
};
