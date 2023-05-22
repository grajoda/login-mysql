const express = require('express');
const cookieParser = require("cookie-parser");

const userController = require('../controllers/userController')
const router = express.Router();

router.use(cookieParser());

// router.get('/', (req, res) => {
//     res.render('pages/mainPage');
// });

router.get('/login', (req, res) => {
    res.render('pages/loginPage');
});


router.post('/login', userController.loginUser);

module.exports = router; 