const Timeline = require('../models/timeline');

exports.create = async (req, res) => {
    try {
        const timeline = await Timeline ({
            title: req.body.title,
            content: req.body.content,
            userId: req.body.userId
        });

        timeline.save();
        res.status(201).json('Upload réussi !');

    } catch (error) {
        res.status(400).json({error});
    }
}

exports.getTimelines = async (req, res) => {
    try {
        const timelines = await Timeline.find({userId: req.params.userId});
        res.status(200).json(timelines);
    } catch (error) {
        res.status(400).json({error});
    }
}

exports.getTimeline = async (req, res) => {
    try {
        console.log(req.body);
    } catch (error) {
        res.status(400).json({error});
    }
}

exports.modifyTimeline = async (req, res) => {
    try {
        console.log(req.body);
    } catch (error) {
        res.status(400).json({error});
    }
}

exports.deleteTimeline = async (req, res) => {
    try {
        console.log(req.body);
    } catch (error) {
        res.status(400).json({error});
    }
}