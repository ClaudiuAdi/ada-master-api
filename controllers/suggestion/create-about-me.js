const OpenAI = require('openai');
const { Lesson, Coach, Sport, Identity, AboutMe } = require('../../models');

module.exports = async (req, res) => {
  await AboutMe.deleteMany({ person: req.body.id });

  await AboutMe.create({
    person: req.body.id,
    aboutMe: req.body.aboutYou,
  });

  return res.status(200).json({ message: 'Info registered' });

  // try {
  //   const { id, aboutYou } = req.body;
  //   // Find the person by ID
  //   const person = await Identity.findById(id);
  //   if (!person) {
  //     return res.status(404).json({ message: 'Person not found' });
  //   }
  //   // Fetch lessons, coaches, and sports
  //   const [lessons, coaches, sports] = await Promise.all([
  //     Lesson.find(),
  //     Coach.find(),
  //     Sport.find(),
  //   ]);
  //   // Configure OpenAI
  //   const openai = new OpenAI({
  //     apiKey: process.env.OPENAI_API_KEY,
  //   });
  //   // Analyze text with GPT-3
  //   const response = await openai.chat.completions.create({
  //     messages: [
  //       { role: 'system', content: 'Esti un asistent manager pentru un club sportiv.' },
  //       {
  //         role: 'user',
  //         content: `Am sa adaug niste date importante pe care doresc sa le analizezi pentru ca sa imi oferi cea mai buna sugestie. Acestea sunt lectiile ${lessons}. Acestea sunt sporturile ${sports}. Acestia sunt antrenorii ${coaches}`,
  //       },
  //       { role: 'assistant', content: 'Am înțeles.' },
  //       {
  //         role: 'user',
  //         content:
  //           'Am sa iti spun acum cateva lucruri despre mine si doresc sa imi sugerezi care este sportul, antrenorul(daca poti sa sugerezi si lectia sau lectiile) la care ar trebui sa merg si sa particip. Sau in cazul in care nimic nu se potriveste sa imi oferi tu o sugestie pe care sa o incerc pe baza cuvintelor pe care o sa le spun despre mine.',
  //       },
  //       {
  //         role: 'assistant',
  //         content: 'Am înțeles, te rog să îmi spui cateva cuvinte despre tine.',
  //       },
  //       {
  //         role: 'user',
  //         content: `Numele meu este ${person.last_name} ${person.first_name}. Iata cateva informatii despre mine ${aboutYou}`,
  //       },
  //     ],
  //     model: 'gpt-3.5-turbo',
  //   });
  //   const analysis = response.choices[0].message.content.trim();
  //   if (analysis) {
  //     // Delete previous AboutMe entries
  //     await AboutMe.deleteMany({ person: id });
  //     // Create new AboutMe entry
  //     await AboutMe.create({
  //       person: person._id,
  //       aboutMe: analysis,
  //     });
  //   }
  //   return res.status(200).json({ message: 'Info registered' });
  // } catch (err) {
  //   console.error('Error with OpenAI API:', err);
  //   return res.status(500).json({
  //     message: 'There was an error processing your request.',
  //   });
  // }
};
