const Users = require('../models/users');
const bcrypt = require('bcrypt');

// User CRUD management
exports.signup = async function(req,res){
    try {
      const passHash = await bcrypt.hash(req.body.password, 10);
      const users = await Users({
        pseudo: req.body.pseudo,
        email: req.body.email,
        profilimg: 'profil_pic.png',
        password: passHash,
      });
      users.save();
      res.status(201).json('Utilisateur enregistré !');
    
    } catch (error) {
      res.status(403);
    }
}

exports.login = async (req, res) => {
  try {
    const user = await Users.findOne({ email: req.body.email });
    if(!user) return res.status(401);
    const motDePasse = await bcrypt.compare(req.body.password, user.password);
    if(motDePasse === false) return res.status(401);

    res.status(200).json(user._id);
  } catch (error) {
    res.status(500).json({ error });
  }
}

exports.getUser = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error });
  }
}

exports.checkAdmin = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    if(user.email === 'ed.paillard@gmail.com') {
      res.status(200).json('ADMIN_OK');
    } else {
      res.status(401).json('KO');
    }
  } catch (error) {
    res.status(500).json({ error });
  }
}

exports.userEdit = async (req, res) => {
  try {
    Users.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
} catch (error) {
    res.status(400).json({error});
}
}