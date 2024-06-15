const { error } = require('../../functions');
const { Lesson, Area } = require('../../models');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { me } = req.user;
  if (!id || !me) {
    throw error(404, 'Missing required params');
  }

  const lesson = await Lesson.findById(id)
    .populate('players')
    .populate('area')
    .populate('coach')
    .populate('sport')
    .lean();
  if (!lesson) {
    throw error(404, 'Resource not found');
  }

  const area = await Area.findById(lesson.location);
  lesson.area = area;

  return res.status(200).json(lesson);
};
