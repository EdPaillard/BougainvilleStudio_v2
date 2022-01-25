const express = require('express');
const router = express.Router();

const tropheesContrl = require('../controller/tropheesContrl');

router.get('/trophees/:userId/:id', tropheesContrl.getOneTrophee);
router.get('/trophees/:userId', tropheesContrl.trophShowcase);
router.post('/trophees/success', tropheesContrl.trophEarn);

module.exports = router;