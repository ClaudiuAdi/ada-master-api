const { error } = require('../../functions');
const { Coach } = require('../../models');

module.exports = async (req, res) => {
  const { me } = req.user;
  if (!me) {
    throw error(404, 'Missing required params');
  }

  const coaches = await Coach.find({}).paginate(req.query);
  if (!coaches) {
    throw error(404, 'Resource not found');
  }

  return res.status(200).json(coaches);
};
