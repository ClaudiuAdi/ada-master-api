const { authenticate } = require('../middleware');
const { Abonament } = require('../controllers');

const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/abonaments', authenticate, Abonament.readMany);
router.post('/abonaments', authenticate, Abonament.create);
router.delete('/abonament/:id', authenticate, Abonament.remove);
router.get('/abonament/:id', authenticate, Abonament.readOne);
router.put('/abonament/:id', authenticate, Abonament.update);
