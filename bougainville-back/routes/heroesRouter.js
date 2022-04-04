const express = require('express');
const router = express.Router();

const heroesContrl = require('../controller/heroesContrl');

router.get('/heroes/scene/:saveScene', heroesContrl.displayScene);
router.get('/heroes/scene/:userId/:saveScene', heroesContrl.loadScene);
router.post('/heroes/create/scene', heroesContrl.createScene);
router.post('/heroes/save/scene', heroesContrl.saveScene);
router.delete('/heroes/delete/:saveScene/:userId', heroesContrl.deleteScene);

module.exports = router;