const express = require('express');
const router = express.Router();

const fragsContrl = require('../controller/fragsContrl');

router.post('/fragments', fragsContrl.upload);
router.get('/fragments', fragsContrl.getFrags);
router.put('/fragment/modifier/:id', fragsContrl.modifyFrags);
router.delete('/fragment/delete/:id', fragsContrl.deleteFrags);

module.exports = router;