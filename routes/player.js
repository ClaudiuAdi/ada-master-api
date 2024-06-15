const { authenticate } = require('../middleware');
const { Player } = require('../controllers');

const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/players', authenticate, Player.readMany);
router.post('/players', authenticate, Player.create);
router.delete('/player/:id', authenticate, Player.remove);
router.get('/player/:id', authenticate, Player.readOne);
router.put('/player/:id', authenticate, Player.update);
