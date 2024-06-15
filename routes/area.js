const { authenticate } = require('../middleware');
const {Area } = require('../controllers');

const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/areas', authenticate, Area.readMany);
router.post('/areas', authenticate, Area.create);
router.delete('/area/:id', authenticate, Area.remove);
router.get('/area/:id', authenticate, Area.readOne);
router.put('/area/:id', authenticate, Area.update);
