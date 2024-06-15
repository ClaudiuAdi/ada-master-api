const { error } = require('../../functions');
const { Area } = require('../../models');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { me } = req.user;
  if (!id || !me) {
    throw error(404, 'Missing required params');
  }

  const area = await Area.findById(id);
  if (!area) {
    throw error(404, 'Resource not found');
  }

  await area.update(req.body);

  return res.status(200).json({ data: area, message: 'Area updated' });
};
