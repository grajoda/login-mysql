//importe as funções que deseja utilizar 
const express = require('express');
const cookieParser = require("cookie-parser");

const userController = require('../controllers/userController');
const router = express.Router();

router.use(cookieParser());

//templates de rota
router.get('/register', (req, res) => {
    //code
    res.render('pages/registerPage');
});

router.post('/register', userController.newUser);

module.exports = router; 