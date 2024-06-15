const { authenticate } = require('../middleware');
const { Sport } = require('../controllers');

const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/sports', authenticate, Sport.readMany);
router.post('/sports', authenticate, Sport.create);
router.delete('/sport/:id', authenticate, Sport.remove);
router.get('/sport/:id', authenticate, Sport.readOne);
router.put('/sport/:id', authenticate, Sport.update);
