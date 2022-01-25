const express = require('express');
const router = express.Router();

const userContrl = require('../controller/userContrl');
//const auth = require('../middleware/auth');


//User table DB
router.post('/inscription', userContrl.signup);
router.post('/login', userContrl.login);
router.get('/user/:id', userContrl.getUser);
router.get('/adminauth/:id', userContrl.checkAdmin);
router.put('/user/edit/:id', userContrl.userEdit)


module.exports = router;