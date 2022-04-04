const express = require('express');
const router = express.Router();

const timelineContrl = require('../controller/timelineContrl');

router.post('/timeline/fixed', timelineContrl.create);
router.get('/timelines/display/:userId', timelineContrl.getTimelines);
router.get('/timelines/select/:id', timelineContrl.getTimeline);
router.put('/timelines/modifier/:id', timelineContrl.modifyTimeline);
router.delete('/timeline/delete/:id', timelineContrl.deleteTimeline);

module.exports = router;