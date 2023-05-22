const express = require('express');
const cookieParser = require("cookie-parser");

const userController = require('../controllers/userController');
const router = express.Router();

router.use(cookieParser());

router.get('/register', (req, res) => {
    res.render('pages/registerPage');
});

router.post('/register', userController.newUser);

module.exports = router; 