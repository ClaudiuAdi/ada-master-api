const { error } = require('../../functions');
const { Identity, Player } = require('../../models');

module.exports = async (req, res) => {
  const { first_name, last_name, birthday, email, category, password } = req.body;

  if (!password) {
    throw error(400, 'Missing required params');
  }

  const identity = {
    first_name,
    last_name,
    email,
    password,
    active: true,
    confirmed: true,
    confirmedAt: Date.now(),
    role: 'player',
    birthday,
    category,
  };
  const result = await Identity.create(identity); // validates and throws if anything is wrong
  if (!result) {
    throw error(401, 'Unable to create identity');
  }

  return res.status(200).json({ success: true });
};
