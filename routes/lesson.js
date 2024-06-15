const { authenticate } = require('../middleware');
const { Lesson, Suggestion, Feedback } = require('../controllers');

const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/lessons', authenticate, Lesson.readMany);
router.post('/lessons', authenticate, Lesson.create);
router.delete('/lesson/:id', authenticate, Lesson.remove);
router.get('/lesson/:id', authenticate, Lesson.readOne);
router.put('/lesson/:id', authenticate, Lesson.update);
router.get('/admin/lesson/:id', authenticate, Lesson.adminReadOne);

router.post('/suggestion', authenticate, Suggestion.createAboutMe);
router.get('/suggestion/:id', authenticate, Suggestion.makeSuggestion);

router.post('/feedback', authenticate, Feedback.giveFeedback);
router.get('/feedback/:id', authenticate, Feedback.concludeFeedback);
