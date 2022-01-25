const Trophees = require('../models/trophees');

exports.trophEarn = async (req, res) => {
    try {
        console.log('Trophy Req: ' + {...req.body})
        const trophy = await Trophees({
            userId: req.body.userId,
            entitle: req.body.entitle,
            resume: req.body.resume,
            picture: req.body.picture,
            date: req.body.date
        })
        trophy.save();
        res.status(201).json('Trophée gagné !');
    } catch (error) {
        res.status(401).json('NON');
    }
}

exports.trophShowcase = async (req, res) => {
    try {
        const trophees = await Trophees.find({userId: req.params.userId});
        res.status(200).json(trophees);
    } catch (error) {
        res.status(401).json('NON');
    }
}

exports.getOneTrophee = async (req, res) => {
    try {
        const trophy = await Trophees.findOne({userId: req.params.userId, _id: req.params.id});
        res.status(200).json(trophy);
    } catch (error) {
        res.status(401).json('NON');
    }
}