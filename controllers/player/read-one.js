const { error } = require('../../functions');
const { Player, Event, Lesson, Match, Identity } = require('../../models');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { me } = req.user;
  if (!id || !me) {
    throw error(404, 'Missing required params');
  }

  const player = await Identity.findById(id).lean().exec();
  if (!player) {
    throw error(404, 'Resource not found');
  }

  // adding player events
  const events = await Event.find({
    player: id,
  });
  player.events = events;

  // adding player lessons
  const lessons = await Lesson.find({
    player: { $in: [id] },
  });
  player.lessons = lessons;

  // ading player matchs
  const matches1 = await Match.find({
    player1: id,
  });
  const matches2 = await Match.find({
    player2: id,
  });
  const matches = [...matches1, ...matches2];
  player.matches = matches;

  return res.status(200).json({ ...player });
};
