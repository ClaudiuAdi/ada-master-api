const { error } = require('../../functions');
const { Sport } = require('../../models');

module.exports = async (req, res) => {
  const { me } = req.user;
  if (!me) {
    throw error(404, 'Missing required params');
  }

  const sports = await Sport.find({}).populate('coaches').paginate(req.query);
  if (!sports) {
    throw error(404, 'Resource not found');
  }

  return res.status(200).json(sports);
};
