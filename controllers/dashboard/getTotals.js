const { Player, Coach, Lesson, Match, Abonament } = require('../../models');

const getTotals = async (req, res) => {
  const numAbonaments = await Abonament.countDocuments()
  const numCoaches = await Coach.countDocuments()
  const numLessons = await Lesson.countDocuments()
  const numMatches = await Match.countDocuments()
  const numPlayers = await Abonament.countDocuments()

  const playersByCat = await Player.aggregate([
    {
      $group: {
        _id: '$category',
        count: { $sum: 1 },
      },
    },
  ]);

  const coachesByCat = await Coach.aggregate([
    {
      $group: {
        _id: '$coach_category',
        count: { $sum: 1 },
      },
    },
  ]);

  const lessonsBySport = await Lesson.aggregate([
    {
      $group: {
        _id: '$sport',
        count: { $sum: 1 },
      },
    },
  ]);

  const matchesBySport = await Match.aggregate([
    {
      $group: {
        _id: '$sport',
        count: { $sum: 1 },
      },
    },
  ]);

  const abonamentsByType = await Abonament.aggregate([
    {
      $group: {
        _id: '$abonament_type',
        count: { $sum: 1 },
      },
    },
  ]);

  return res.status(200).json({
    abonamentsByType,
    coachesByCat,
    lessonsBySport,
    matchesBySport,
    playersByCat,

    numAbonaments,
    numCoaches,
    numLessons,
    numMatches,
    numPlayers,

  });

}


module.exports = getTotals
