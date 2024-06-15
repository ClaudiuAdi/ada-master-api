const { error } = require('../../functions');
const { Area, Lesson, Match } = require('../../models');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { me } = req.user;
  if (!id || !me) {
    throw error(404, 'Missing required params');
  }

  const area = await Area.findById(id).lean().exec();
  if (!area) {
    throw error(404, 'Resource not found');
  }

  // adding lessons
  const lessons = await Lesson.find({ location: id });
  area.lessons = lessons;

  // adding matches
  const matches = await Match.find({ location: id });
  area.matches = matches;

  return res.status(200).json(area);
};
