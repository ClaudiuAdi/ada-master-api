const { default: OpenAI } = require('openai');
const { AboutMe, Identity, Lesson, Coach, Sport } = require('../../models');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    // Find the person by ID
    const person = await Identity.findById(id);
    if (!person) {
      return res.status(404).json({ message: 'Person not found' });
    }

    const aboutMe = await AboutMe.findOne({ person: req.params.id });
    // Fetch lessons, coaches, and sports
    const [lessons, coaches, sports] = await Promise.all([
      Lesson.find(),
      Coach.find(),
      Sport.find(),
    ]);
    // Configure OpenAI
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    // Analyze text with GPT-3
    const response = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'Esti un asistent manager pentru un club sportiv.' },
        {
          role: 'user',
          content: `Am sa adaug niste date importante pe care doresc sa le analizezi pentru ca sa imi oferi cea mai buna sugestie. Acestea sunt lectiile ${lessons}. Acestea sunt sporturile ${sports}. Acestia sunt antrenorii ${coaches}`,
        },
        { role: 'assistant', content: 'Am înțeles.' },
        {
          role: 'user',
          content:
            'Am sa iti spun acum cateva lucruri despre mine si doresc sa imi sugerezi care este sportul, antrenorul/antrenorii (daca poti sa sugerezi si lectia sau lectiile) la care ar trebui sa merg si sa particip. Sau in cazul in care nimic nu se potriveste sa imi oferi tu o sugestie pe care sa o incerc pe baza cuvintelor pe care o sa le spun despre mine.',
        },
        {
          role: 'assistant',
          content: 'Am înțeles, te rog să îmi spui cateva cuvinte despre tine.',
        },
        {
          role: 'user',
          content: `Numele meu este ${person.last_name} ${person.first_name}. Iata cateva informatii despre mine ${aboutMe.aboutMe}`,
        },
      ],
      model: 'gpt-3.5-turbo',
    });
    const analysis = response.choices[0].message.content.trim();

    return res.status(200).json({ response: analysis });
  } catch (err) {
    console.error('Error with OpenAI API:', err);
    return res.status(500).json({
      message: 'There was an error processing your request.',
    });
  }

  // const aboutMe = await AboutMe.findOne({ person: req.params.id });

  // return res.status(200).json({ response: aboutMe.aboutMe });
};
