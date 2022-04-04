const Heroes = require('../models/heroes');

exports.displayScene = async (req, res) => {
    try {
        console.log(req.params.saveScene)
        const heroes = await Heroes.find({saveScene: req.params.saveScene})
        console.log(heroes)
        res.status(200).json(heroes);
    } catch (error) {
        res.status(400).json({error});
    }
}

exports.loadScene = async (req, res) => {
    try {
        const heroes = await Heroes({ 
            userId: req.params.userId,
            saveScene: req.params.saveScene 
        })
        res.status(200).json(heroes);
    } catch (error) {
        res.status(400).json({error});
    }
}

exports.createScene = async (req, res) => {
    try {
        const heroes = await Heroes({
            background: req.body.background,
            PNJPicture: req.body.PNJPicture,
            PNJSentence: req.body.PNJSentence,
            option1: req.body.option1,
            option2: req.body.option2,
            option3: req.body.option3,
            saveScene: req.body.saveScene
        });

        heroes.save();
        res.status(201).json('Scene créée !')
    } catch (error) {
        res.status(400).json({error});
    }
}

exports.saveScene = async (req, res) => {
    try {
        const heroes = await Heroes({
            userId: req.body.userId,
            background: req.body.background,
            PNJPicture: req.body.PNJPicture,
            PNJSentence: req.body.PNJSentence,
            option1: req.body.option1,
            option2: req.body.option2,
            option3: req.body.option3,
            saveScene: req.body.saveScene
        });

        heroes.save();
        res.status(201).json('progression sauvegardée !')
    } catch (error) {
        res.status(400).json({error});
    }
}

exports.deleteScene = async (req, res) => {
    try {
        Heroes.deleteOne({ saveScene: req.params.saveScene, userId: req.params.userId })
    } catch (error) {
        res.status(400).json({error});
    }
}