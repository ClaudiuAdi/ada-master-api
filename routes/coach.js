const { authenticate } = require('../middleware');
const { Coach } = require('../controllers');

const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/coaches', authenticate, Coach.readMany);
router.post('/coaches', authenticate, Coach.create);
router.delete('/coach/:id', authenticate, Coach.remove);
router.get('/coach/:id', authenticate, Coach.readOne);
router.put('/coach/:id', authenticate, Coach.update);
