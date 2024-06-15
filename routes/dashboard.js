const { authenticate } = require('../middleware');
const { Dashboard } = require('../controllers');

const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/dashboard', authenticate, Dashboard.getTotals);
