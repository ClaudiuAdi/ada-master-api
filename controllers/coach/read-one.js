const { error } = require('../../functions');
const { Coach, Lesson, Sport } = require('../../models');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { me } = req.user;
  if (!id || !me) {
    throw error(404, 'Missing required params');
  }

  const coach = await Coach.findById(id).lean().exec();
  if (!coach) {
    throw error(404, 'Resource not found');
  }

  // adding lessons
  const lessons = await Lesson.find({ coach: id });
  coach.lessons = lessons;

  // adding sports
  const sports = await Sport.find({ coaches: { $in: [id] } });
  coach.sports = sports;

  return res.status(200).json(coach);
};
