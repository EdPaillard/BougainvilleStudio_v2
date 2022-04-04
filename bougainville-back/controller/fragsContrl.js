const Frags = require('../models/fragments');

exports.upload = async (req, res) => {
    try {
        const frag = await Frags ({
            title: req.body.title,
            description: req.body.description,
            miniature: req.body.mini,
            content: req.body.content
        });

        frag.save();
        res.status(201).json('Upload réussi !');

    } catch (error) {
        res.status(400).json({error});
    }
}

exports.getFrag = async (req, res) => {
    try {
        const frag = await Frags.findById(req.params.id);
        res.status(200).json(frag);
    } catch (error) {
        res.status(400).json({error});
    }
}

exports.getFrags = async (req, res) => {
    try {
        const frags = await Frags.find({});
        res.status(200).json(frags);
    } catch (error) {
        res.status(400).json({error});
    }
}

exports.modifyFrags = async (req, res) => {
    try {
        Frags.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    } catch (error) {
        res.status(400).json({error});
    }
}

exports.deleteFrags = async (req, res) => {
    try {
        Frags.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
    } catch (error) {
        res.status(400).json({error});
    }
}