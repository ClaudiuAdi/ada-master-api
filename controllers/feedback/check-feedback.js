const { error } = require('../../functions');
const { Lesson, Identity } = require('../../models');

module.exports = async (req, res) => {
  const { me } = req.user;
  if (!me) {
    throw error(404, 'Missing required params');
  }

  return res.status(200).json({ message: 'Lesson created' });
};
