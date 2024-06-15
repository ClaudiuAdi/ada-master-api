const { default: OpenAI } = require('openai');
const { error } = require('../../functions');
const { Lesson, Identity, Feedback, LessonFeedback } = require('../../models');

module.exports = async (req, res) => {
  const { id: lessonId } = req.params;
  const { me } = req.user;

  if (!me) {
    throw error(404, 'Missing required params');
  }

  const lesson = await Lesson.findById(lessonId)
    .populate('players')
    .populate('area')
    .populate('coach')
    .populate('sport')
    .lean();

  if (!lesson) {
    throw error(404, 'Resource not found');
  }

  const lessonFeedback = await Feedback.findOne({ lesson: lessonId });

  if (!lessonFeedback) {
    return res
      .status(200)
      .json({ response: 'Studentii nu au oferit fedeback pentru aceasta lectie' });
  }

  if (lessonFeedback.numberOfFeedbacks !== lessonFeedback.persons.length) {
    const feedbacks = lessonFeedback.feedbacks.map((feedback) => feedback);

    console.log(lessonFeedback);

    const updLess = await Feedback.updateOne(
      { _id: lessonFeedback._id },
      { numberOfFeedbacks: lessonFeedback.persons.length }
    );
    console.log(updLess);

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    // Analyze text with GPT-3
    const response = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'Esti un asistent manager pentru un club sportiv.' },
        {
          role: 'user',
          content: `Am sa adaug niste feedback pentru lectia ${lesson} si doresc ca sa imi dai o concluzie a feedback-urilor stundetilor.`,
        },
        {
          role: 'assistant',
          content: 'Am înțeles, ofera-mi feedback-urile.',
        },
        {
          role: 'user',
          content: `Acestea sunt feedback-urile pentru lectia de mai sus: ${feedbacks}`,
        },
      ],
      model: 'gpt-3.5-turbo',
    });
    const analysis = response.choices[0].message.content.trim();

    console.log(analysis);

    await LessonFeedback.deleteMany({ lesson: lessonId });

    const lesFed = await LessonFeedback.create({ lesson: lessonId, analysis });
    console.log(lesFed);

    return res.status(200).json({ response: analysis });
  } else {
    const feedbackToFeedback = await LessonFeedback.findOne({ lesson: lessonId });

    return res.status(200).json({ response: feedbackToFeedback.analysis });
  }
};
