const { error } = require('../../functions');
const { Lesson, Identity, Feedback } = require('../../models');

module.exports = async (req, res) => {
  const { lesson: lessonId, feedback } = req.body;
  const { me } = req.user;

  if (!me) {
    throw error(404, 'Missing required params');
  }

  const existingLessonFeedback = await Feedback.findOne({ lesson: lessonId });

  if (existingLessonFeedback) {
    const alreadyFeedback = existingLessonFeedback.persons.includes(me);

    if (!alreadyFeedback) {
      await Feedback.updateOne(
        { _id: existingLessonFeedback._id },
        {
          feedbacks: [...existingLessonFeedback.feedbacks, feedback],
          persons: [...existingLessonFeedback.persons, me],
        }
      );
      return res.status(200).json({ message: 'Feedback offered' });
    } else {
      return res.status(200).json({ message: 'Feedback already offered' });
    }
  } else {
    const newFeedback = {
      persons: [me],
      feedbacks: [feedback],
      lesson: lessonId,
      numberOfFeedbacks: 0,
    };

    await Feedback.create(newFeedback);
    return res.status(200).json({ message: 'Feedback created' });
  }
};
