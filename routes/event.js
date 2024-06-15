const { authenticate } = require('../middleware');
const { Event } = require('../controllers');

const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/events', authenticate, Event.readMany);
router.post('/events', authenticate, Event.create);
router.delete('/event/:id', authenticate, Event.remove);
router.get('/event/:id', authenticate, Event.readOne);
router.put('/event/:id', authenticate, Event.update);
