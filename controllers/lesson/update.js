const { error } = require('../../functions');
const { Lesson, Identity } = require('../../models');
const mongoose = require('mongoose');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { me } = req.user;
    const { participate } = req.body;

    if (!id || !me) {
      throw error(404, 'Missing required params');
    }

    const lesson = await Lesson.findById(id).lean();
    if (!lesson) {
      throw error(404, 'Resource not found');
    }

    const meObjectId = mongoose.Types.ObjectId(me);
    const isPlayerIncluded = lesson.players.some((playerId) => playerId.equals(meObjectId));

    if (participate && !isPlayerIncluded) {
      lesson.players.push(meObjectId);
    } else if (!participate && isPlayerIncluded) {
      lesson.players = lesson.players.filter((playerId) => !playerId.equals(meObjectId));
    }

    await Lesson.updateOne({ _id: lesson._id }, { players: lesson.players });

    return res.status(200).json({ data: lesson, message: 'Lesson updated' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
