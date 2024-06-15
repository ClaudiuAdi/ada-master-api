const { error } = require('../../functions');
const { Abonament } = require('../../models');

module.exports = async (req, res) => {
  const { me } = req.user;
  if (!me) {
    throw error(404, 'Missing required params');
  }

  const abonaments = await Abonament.find({}).paginate(req.query);
  if (!abonaments) {
    throw error(404, 'Resource not found');
  }

  return res.status(200).json(abonaments);
};
