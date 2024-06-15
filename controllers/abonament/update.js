const { error } = require('../../functions');
const { Abonament } = require('../../models');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { me } = req.user;
  if (!id || !me) {
    throw error(404, 'Missing required params');
  }

  const abonament = await Abonament.findById(id);
  if (!abonament) {
    throw error(404, 'Resource not found');
  }

  await abonament.update(req.body);

  return res.status(200).json({ data: abonament, message: 'Abonament updated' });
};
