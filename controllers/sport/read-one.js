const { error } = require('../../functions');
const { Sport, Lesson, Match } = require('../../models');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { me } = req.user;
  if (!id || !me) {
    throw error(404, 'Missing required params');
  }

  const sport = await Sport.findById(id).lean().exec();
  if (!sport) {
    throw error(404, 'Resource not found');
  }

  // adding player lessons
  const lessons = await Lesson.find({
    sport: { $in: [id] },
  });
  sport.lessons = lessons;

  //adding sport matches
  const matches = await Match.find({
    sport: { $in: [id] },
  });
  sport.matches = matches;

  return res.status(200).json({ ...sport });
};
